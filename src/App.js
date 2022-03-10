import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Favorites from './Components/Favorites';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritePinballLocations: []
    }
  }

  // This may be redundant and not necessary if we have the saveUserFavorites function already called?
  favoritePinballLocation = (id) => {
    let newFavorite = {
      email: this.props.auth0.user.email,
      locationId: id
    };
    console.log('newFavorite is ', newFavorite);
    if (!this.state.favoritePinballLocations.includes(id)) {
      this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, newFavorite]})
    } 
    // console.log('favoritepinballlocations: ', this.state.favoritePinballLocations);
  };

  // This function grabs saved user prefernces from Mongo if they exist.
  getUserFavorites = async () => {
    try {
        let url = `${process.env.REACT_APP_SERVER}/favorites?email=${this.props.auth0.user.email}`;
        let results = await axios.get(url)
        this.setState({ favoritePinballLocations: results.data })
      
    } catch (error) {
      console.log('Error retrieving favorites', error.message);
    }
  };

  saveUserFavorites = async (newFavorite) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/favorites`;
        let newUserFavorite = await axios.post(url, newFavorite);
        this.setState({
          favoritePinballLocations: [ ...this.state.favoritePinballLocations, newUserFavorite.data ]
        });  
      }
    } catch (error) {
      console.log('there was an error saving favorite', error.message);
    }
  }

  updateUserFavorites = async (favToUpdate) =>{
    try {
      let url = `${process.env.REACT_APP_SERVER}/favorites`
      let updatedFavorite = await axios.put(url, favToUpdate);
      let updatedFavorites = this.state.favoritePinballLocations.map(favorite => favorite === favToUpdate ? updatedFavorite.data : favorite);
      this.setState({favoritePinballLocations: updatedFavorites})
    } catch (error) {
      console.log('Error updating favorites', error.message);
    }
  }

  deleteUserFavorites = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/favorites?email=${this.props.auth0.user.email}&locationId=${id}`;
        await axios.delete(url);
        const updatedFavorites = this.state.favoritePinballLocations.filter(favorite => favorite._id !== id);
        this.setState({
          favoritePinballLocations: updatedFavorites
        });  
      }
    } catch (error) {
      console.log('there was an error saving deleting. not deleted.', error.message);
    }
  }

  componentDidMount() {
    this.getUserFavorites();
  }

  render() {
    return (<>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main 
              favoritePinballLocation={this.favoritePinballLocation}
            />
          </Route>
          <Route path="/favorites">
            <Favorites 
              favoritePinballLocations={this.state.favoritePinballLocations}
              deleteUserFavorites={this.deleteUserFavorites}
              saveUserFavorites={this.saveUserFavorites}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
    )
  }
}

export default withAuth0(App);
