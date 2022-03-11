import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Favorites from './Components/Favorites';
import AboutUsModal from './Components/AboutUsModal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritePinballLocations: [],
      displayAboutUsModal: false
    }
  }

  toggleAboutUsModal= () => {
    console.log("toggle modal");
    if (this.state.displayAboutUsModal===true){
      this.setState({displayAboutUsModal: false})
    }else{
      this.setState({displayAboutUsModal: true})
    }
  }


  // This may be redundant and not necessary if we have the saveUserFavorites function already called?
  // favoritePinballLocation = (id) => {
  //   let newFavorite = {
  //     email: this.props.auth0.user.email,
  //     locationId: id
  //   };
  //   console.log('newFavorite is ', newFavorite);
  //   if (!this.state.favoritePinballLocations.includes(id)) {
  //     this.setState({ favoritePinballLocations: [...this.state.favoritePinballLocations, newFavorite] })
  //   }
    // console.log('favoritepinballlocations: ', this.state.favoritePinballLocations);
  // };

  // This function grabs saved user prefernces from Mongo if they exist.

  // postNewUser = async (email) => {
  //   try {
  //     let url = `${process.env.REACT_APP_SERVER}/user?email=${email}`;
  //     await axios.post(url)
  //   } catch (error) {
  //     console.log('Error posting user', error.message)
  //   }
  // }

  getUserFavorites = async () => {
    console.log(this.props.auth0.user.email)
    try {
      let url = `${process.env.REACT_APP_SERVER}/favorites?email=${this.props.auth0.user.email}`;
      let results = await axios.get(url)
      this.setState({ favoritePinballLocations: results.data })
      console.log('line 63 in function', results.data);

    } catch (error) {
      console.log('Error retrieving favorites', error.message);
    }
  };

  //Saves a new user favorites object to Mongo
  saveUserFavorites = async (newFavorite) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let userUrl = `${process.env.REACT_APP_SERVER}/user`;
        await axios.post(userUrl, {email: this.props.auth0.user.email})
        let url = `${process.env.REACT_APP_SERVER}/favorites`;
        let newUserFavorite = await axios.post(url, newFavorite);
        console.log(newFavorite)
        this.setState({
          favoritePinballLocations: [...this.state.favoritePinballLocations, newUserFavorite.data]
        });
      }
    } catch (error) {
      console.log('there was an error saving favorite', error.message);
    }
  }

  updateUserFavorites = async (e, favToUpdate) => {
    e.preventDefault();
    favToUpdate.score = e.target.score.value;
    console.log(favToUpdate);
    try {
      let url = `${process.env.REACT_APP_SERVER}/favorites?email=${this.props.auth0.user.email}`
      let updatedFavorite = await axios.put(url, favToUpdate);
      let updatedFavorites = this.state.favoritePinballLocations.map(favorite => favorite.id === updatedFavorite.id ? updatedFavorite : favorite);
      this.setState({ favoritePinballLocations: updatedFavorites })
    } catch (error) {
      console.log('Error updating favorites', error.message);
    }
  }

  deleteUserFavorites = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/favorites?email=${this.props.auth0.user.email}&locationId=${id}`;
        await axios.delete(url);
        const updatedFavorites = this.state.favoritePinballLocations.filter(favorite => favorite.id !== id);
        this.setState({
          favoritePinballLocations: updatedFavorites
        });
      }
    } catch (error) {
      console.log('there was an error saving deleting. not deleted.', error.message);
    }
  }

  
  render() {
    console.log('app state', this.state)
    return (<>
      <Router>
        <Header 
          toggleAboutUsModal={this.toggleAboutUsModal}
          postNewUser={this.postNewUser} />
        <Switch>
          <Route exact path="/">
            {
              this.props.auth0.isAuthenticated ?
              <Main
                // favoritePinballLocation={this.favoritePinballLocation}
                saveUserFavorites={this.saveUserFavorites}
              />
              : <h1>Please Log In</h1>

            }
          </Route>
          <Route path="/favorites">
            <Favorites
              favoritePinballLocations={this.state.favoritePinballLocations}
              deleteUserFavorites={this.deleteUserFavorites}
              saveUserFavorites={this.saveUserFavorites}
              getUserFavorites={this.getUserFavorites}
              updateUserFavorites={this.updateUserFavorites}
            />
          </Route>
        </Switch>
        <Modal show={this.state.displayAboutUsModal}>
          <AboutUsModal toggleAboutUsModal={this.toggleAboutUsModal} />
        </Modal>
        <Footer />
      </Router>
    </>
    )
  }
}

export default withAuth0(App);
