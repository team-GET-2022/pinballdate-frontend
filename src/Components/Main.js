import React from 'react';
import PinballForm from './PinballForm.js';
import ResultsDisplay from './ResultsDisplay';
import '../main.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinballResults: [],  // Returns a list of nearby establishments with pinball machines.
      restaurantResults: [], //Returned list of nearby restaurants relevant to selected pinball machine.
      userPreferences: {}, //These are our filter criteria.  They are saved to mongo so they can be reloaded next session.
      selectedMachine: {}
    }
  }

  // This function gets the user data from the form.
  setUserPreferences = (userPreferences) => {
    this.setState({ userPreferences });
  }

  // This function grabs saved user prefernces from Mongo if they exist.
  getUserPreferences = async () => {
    try {
      if (this.state.userPreferences.length > 0) {
        let url = `${process.env.REACT_APP_SERVER}/users?${this.props.auth0.user.email}`;
        let results = await axios.get(url)
        this.setState({ userPreferences: results.data })
      } else {
        console.log('No user preferences found')
      }
    } catch (error) {
      console.log('Error retrieveing preferences', error.message);
    }
  };

  saveUserPreferences = async () => {
    try {
      if (this.props.auth0.isAuthenticated) {
        let url = `${process.env.REACT_APP_SERVER}/users?${this.props.auth0.user.email}`;

      }
    } catch (error) {

    }
  }

  // This is what talks to our backend to get our response back
  getPinballResults = async (location) => {
    try {
      // console.log(this.state.userPreferences)
      let url = `${process.env.REACT_APP_SERVER}/pinball?searchQuery=${location}`;
      let pinballResults = await axios.get(url);
      this.setState({ pinballResults: pinballResults.data });
      console.log(this.state.pinballResults);
      this.updateRestaurantResults(this.state.pinballResults.locations[0]);
    } catch (error) {
      console.log("Error in getPinballResults", error.message);
    }
  }

  //This function will update the restaurant results
  updateRestaurantResults = async (machine) => {
    try {
      //If we haven't selected a machine yet, the first machine will be selected. 
      this.setState({selectedMachine: machine});

      let url = `${process.env.REACT_APP_SERVER}/restaurants?searchQuery=${this.state.selectedMachine.lat},${this.state.selectedMachine.lon}`
      let restaurantResults = await axios.get(url);
      console.log('Restaurant results: ', restaurantResults);
      this.setState({ restaurantResults: restaurantResults.data })
    } catch (error) {
      console.log('Error retrieving restaurant results', error.message);
    }
  };

  render() {
    // console.log(this.state.userPreferences);
    return (
      <>
        <h1>Pinball Date</h1>
        <PinballForm
          setUserPreferences={this.setUserPreferences}
          getPinballResults={this.getPinballResults}
        />
        <ResultsDisplay
          pinballResults={this.state.pinballResults}
          userPreferences={this.state.userPreferences}
          restaurantResults={this.state.restaurantResults}
          updateRestaurantResults={this.updateRestaurantResults}
          favoritePinballLocation={this.props.favoritePinballLocation}
        />
      </>
    );
  }
}

export default withAuth0(Main);