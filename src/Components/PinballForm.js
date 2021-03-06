import React from 'react';
import { Form, Button, } from 'react-bootstrap';
import '../pinballform.css'

class PinballForm extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault();
    let location = e.target.location.value;
    console.log(location);

    let isClosed = e.target.isClosed.checked; //If true, allows closed restaurants to show up in results
    let fiveStar = e.target.fiveStar.checked; //If true, will only show five-star restaurants (Yelp rating)
    let affordable = e.target.affordable.checked; //If true, will only show $$ and below restaurants (Yelp $$$ scale)

    this.props.setUserPreferences({location,isClosed,fiveStar,affordable});
    this.props.getPinballResults(location);
  }


  render() {
    return (
      <>
        <Form className="pinballForm" onSubmit={this.handleSubmit}>
          <Form.Group controlId="location" className="pinballFormGroup">
            <Form.Control type="text" placeholder="Enter an address to find list of closest pinball machines within 25 miles of specified address" />
          </Form.Group>
          <div className="switchesHolder">
            <Form.Group controlId="fiveStar">
            <Form.Check type="switch" label="Five-star only" />
            </Form.Group>

            <Form.Group controlId="affordable">
            <Form.Check type="switch" label="Affordable" />
            </Form.Group>

            <Form.Group controlId="isClosed">
            <Form.Check type="switch" label="Hide closed restaurants" />
            </Form.Group>
          </div>

          <Button style={{ backgroundColor: "#9d02aa" }} type="submit" id="submitButton">Go!</Button>
        </Form>
      </>
    );
  }
}

export default PinballForm;