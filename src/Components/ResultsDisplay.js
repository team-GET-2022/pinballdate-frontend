import React from 'react';
import { Container, Accordion, ListGroup, Button } from 'react-bootstrap'


class ResultsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPinball: [],
      pinballResults: [],
      // favoritePinballLocations: []
    }
  }

  //In props: pinballResults, restaurantResults, userPreferences

  //This returns an array of Accordion Items by looping through our pinballResults held in props. 
  renderPinballAccordions() {
    let pinballAccordionsArray = [];

    if (this.props.pinballResults.locations) {
      this.props.pinballResults.locations.forEach((result, i) => pinballAccordionsArray.push(
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>{result.name}</Accordion.Header>
          <Accordion.Body>
            <img src="https://place-hold.it/200x200" alt="Pinball"></img>
            <p>{result.street}</p>
            <Button type='click' onClick={() => this.props.favoritePinballLocation(result.id)}>💗</Button>
            <ListGroup>
              {/* {this.state.pinballResults[i].location_machine_xrefs.foreach((machine, j) =>console.log(machine)} */}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>));
    }
    return pinballAccordionsArray;
  }

  // favoritePinballLocation = (id) => {
  //   if (this.state.favoritePinballLocations.length === 0) {
  //     this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, id]})
  //     console.log('clicked favorite', id)
  //   }
  //   if (!this.state.favoritePinballLocations.includes(id)) {
  //     this.setState({favoritePinballLocations: [...this.state.favoritePinballLocations, id]})
  //     console.log(this.state.favoritePinballLocations)
  //   } 
  // };

  //This returns an array of Accordion Items by looping through our restaurantResults held in props. 
  renderRestaurantAccordions() {
    let restaurantAccordionsArray = [];

    if (this.props.restaurantResults.businesses) {
      this.props.restaurantResults.businesses.forEach((result, i) => restaurantAccordionsArray.push(
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>{result.name}</Accordion.Header>
          <Accordion.Body>
            Street address: {result.location.address1}
            <img src={result.image_url} alt={result.name}></img>
          </Accordion.Body>
        </Accordion.Item>
      ));
    }
    return restaurantAccordionsArray;
  }

// use this.props.updateRestaurantResults(index of machine)

  render() {
    return (
      <>
        <Container className="results">
          <Accordion id="pinballResults" className="w-50 m-3 p-2">
            {this.renderPinballAccordions()}
          </Accordion>
          <Accordion id="restaurantResults" className="w-50 m-3 p-2">
            {this.renderRestaurantAccordions()}
          </Accordion>
        </Container>
      </>
    );
  }
}

export default ResultsDisplay;