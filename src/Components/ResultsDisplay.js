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
      pinballAccordionsArray.push(<div className="instructions">First, let's find a place to play pinball...</div>);
      this.props.pinballResults.locations.forEach((result, i) => {
        let gmapsUrl = `https://www.google.com/maps/search/${result.street}+${result.city}+${result.state}/`;
        pinballAccordionsArray.push(
          <Accordion.Item key={i} eventKey={i}>
            <Accordion.Header>{result.name} ({result.location_machine_xrefs.length} machines)</Accordion.Header>
            <Accordion.Body className="accordionBody">
              <ListGroup>
                {this.getMachinesArray(result.location_machine_xrefs)}
              </ListGroup>
              <div className="imageAndLink">
                <div className="address">{result.street}<br />{result.city}, {result.state}</div>
                <Button type='click' onClick={() => this.props.saveUserFavorites({ email: this.props.auth0.user.email, favoriteLocations: result })}>💗Favorite!</Button>
                <Button href={gmapsUrl}>View on Google Maps...</Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        )
      });
    }
    return pinballAccordionsArray;
  }

  getMachinesArray(xrefs) {
    let machinesArray = [];
    xrefs.forEach((xref, i) => machinesArray.push(
      <ListGroup.Item key={i} className="machineEntry">
        <img src={xref.machine.opdb_img} alt="pinball machine art" />
        <br />
        {xref.machine.name} ({xref.machine.year})
        <br />Manufacturer: {xref.machine.manufacturer}
      </ListGroup.Item>
    ))
    return machinesArray;
  }

  //This returns an array of Accordion Items by looping through our restaurantResults held in props. 
  renderRestaurantAccordions() {
    let restaurantAccordionsArray = [];
    if (this.props.restaurantResults.businesses) {
      restaurantAccordionsArray.push(<div className="instructions">...then, find your perfect restaurant!</div>);

      this.props.restaurantResults.businesses.forEach((result, i) => restaurantAccordionsArray.push(
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>{result.name} ({result.categories[0].title})</Accordion.Header>
          <Accordion.Body className="restaurantAccordionBody">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="address"><h3>Street address:</h3>{result.location.address1}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Distance:</h3>{Math.round(result.distance * 0.000621371)} {Math.round(result.distance * 0.000621371) > 1 || Math.round(result.distance * 0.000621371) < 1 ? ' miles' : ' mile'}
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="address"><h3>Rating:</h3> {result.rating}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="address"><h3>Price:</h3>{result.price}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="address"><h3>Contact:</h3>{result.display_phone}</div>
              </ListGroup.Item>
            </ListGroup>
            <div className="imageAndLink">
              <img src={result.image_url} alt={result.name}></img>
              <Button href={result.url}>View on Yelp...</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ));
    }
    return restaurantAccordionsArray;
  }

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