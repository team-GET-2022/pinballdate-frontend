import React from 'react';
import PinballForm from './PinballForm.js';
import ResultsDisplay from './ResultsDisplay';
import '../main.css';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinballResults: [],
      restaurantResults: [], //Returned list of nearby restaurants relevant to selected pinball machine
      userPreferences: {} //These are our filter criteria.  They are saved to mongo so they can be reloaded next session
    }
  }

  setUserPreferences = (userPreferences) => {
    this.setState({ userPreferences });
  }

  //This is what talks to our backend to get our response back
  getPinballResults = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pinball?searchQuery=${this.state.userPreferences.location}`;
      let pinballResults = await axios.get(url);
      this.setState({ pinballResults: pinballResults.data });
    } catch (error) {
      console.log("Error in getPinballResults", error.message);
    }
  }

  render() {
    console.log(this.state.userPreferences);
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
        />
      </>
    );
  }
}

export default Main;