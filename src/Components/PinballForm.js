import React from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import '../pinballform.css'

class PinballForm extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault();
    let location = e.target.location.value;
    console.log(location);

    let vegan = e.target.vegan.checked;
    let adultsOnly = e.target.adultsOnly.checked;
    let pets = e.target.pets.checked;
    let bar = e.target.bar.checked;

    this.props.setUserPreferences({location,vegan,adultsOnly,pets,bar});
    // console.log(vegan,adultsOnly,pets, bar);
  }


  render() {
    return (
      <>
        <Form className="pinballForm" onSubmit={this.handleSubmit}>
          <Form.Group controlId="location" className="pinballFormGroup">
            <Form.Control type="text" placeholder="Search for pinball..." />
          </Form.Group>
          <div className="switchesHolder">

            <Form.Group controlId="vegan">
              <Form.Check type="switch" label="vegan" />
            </Form.Group>

            <Form.Group controlId="adultsOnly">
            <Form.Check type="switch" label="21+" />
            </Form.Group>

            <Form.Group controlId="pets">
            <Form.Check type="switch" label="pet friendly" />
            </Form.Group>

            <Form.Group controlId="bar">
            <Form.Check type="switch" label="full bar" />
            </Form.Group>

          </div>

          <Button variant="primary" type="submit" id="submitButton">Go!</Button>
        </Form>
      </>
    );
  }
}

export default PinballForm;