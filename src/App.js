import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Favorites from './Components/Favorites';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritePinballLocations: []
    }
  }

  favoritePinballLocation = (id) => {
    if (this.state.favoritePinballLocations.length === 0) {
      this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, id]})
      console.log('clicked favorite', id)
    }
    if (!this.state.favoritePinballLocations.includes(id)) {
      this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, id]})
      console.log(this.state.favoritePinballLocations)
    } 
  };

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
