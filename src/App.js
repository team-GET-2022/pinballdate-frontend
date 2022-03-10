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

  favoritePinballLocation = (id, name, street) => {
    let newFavorite = {
      name: name,
      street: street,
      id: id
    };
    console.log('newFavorite is ', newFavorite);
    if (!this.state.favoritePinballLocations.includes(id)) {
      this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, newFavorite]})
    } 
    // console.log('favoritepinballlocations: ', this.state.favoritePinballLocations);
  };

  saveUserFavorites = async (newFavorite) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/favorites?${this.props.auth0.user.email}`;
        let newUserFavorite = await axios.post(url, newFavorite);
        this.setState({
          favoritePinballLocations: [ ...this.state.favoritePinballLocations, newUserFavorite.data ]
        });  
      }
    } catch (error) {
      console.log('there was an error saving favorite', error.message);
    }
  }

  deleteUserFavorites = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/favorites/${id}?${this.props.auth0.user.email}`;
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
