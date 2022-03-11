import React from 'react';
import { Container, Accordion, ListGroup, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import '../resultsdisplay.css';

class ResultsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPinball: [],
      pinballResults: []
    }
  }
  //This returns an array of Accordion Items by looping through our pinballResults held in props. 
  renderPinballAccordions() {
    let pinballAccordionsArray = [];

    if (this.props.pinballResults.locations) {
      this.props.pinballResults.locations.forEach((result, i) => pinballAccordionsArray.push(
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>{result.name} ({result.location_machine_xrefs.length} machines)</Accordion.Header>
          <Accordion.Body className="accordionBody">
            {/* <img src="https://place-hold.it/200x200" alt="Pinball"></img> */}
            <ListGroup>
              {this.getMachinesArray(result.location_machine_xrefs)}
            </ListGroup>
            <div className="address">{result.street}<br />{result.city}, {result.state}</div>
            <Button type='click' onClick={() => this.props.saveUserFavorites({ email: this.props.auth0.user.email, favoriteLocations: result })}>💗Favorite!</Button>
          </Accordion.Body>
        </Accordion.Item>));
    }
    return pinballAccordionsArray;
  }

  getMachinesArray(xrefs) {
    let machinesArray = [];
    xrefs.forEach((xref, i) => machinesArray.push(
      <ListGroup.Item key={i}>
        <img src={xref.machine.opdb_img} alt="pinball machine art" />{xref.machine.name} ({xref.machine.year})
      </ListGroup.Item>
    ))
    return machinesArray;
  }

  //This returns an array of Accordion Items by looping through our restaurantResults held in props. 
  renderRestaurantAccordions() {
    let restaurantAccordionsArray = [];

    if (this.props.restaurantResults.businesses) {
      this.props.restaurantResults.businesses.forEach((result, i) => restaurantAccordionsArray.push(
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>{result.name}</Accordion.Header>

          <Accordion.Body>
            Street address:

            <p>{result.location.address1 + ' '} </p>
            <p>{result.location.city}, {result.location.state}  {result.location.zip}</p>
          </Accordion.Body>
          <Accordion.Body>
            Distance from your address: {Math.round(result.distance * 0.000621371)} {Math.round(result.distance * 0.000621371) > 1 || Math.round(result.distance * 0.000621371) < 1 ? ' miles' : ' mile'}
          </Accordion.Body>

          <Accordion.Body className="restaurantAccordionBody">

            <img src={result.image_url} alt={result.name}></img>
            <ListGroup>
              <ListGroup.Item>
                <div className="address">Street address: {result.location.address1}</div>
              </ListGroup.Item>
            </ListGroup>
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

export default withAuth0(ResultsDisplay);