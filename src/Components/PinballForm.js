import React from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';


class PinballForm extends React.Component {

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Form.Control type="text" placeholder="Search for pinball..." />
            <div className="switchesHolder">
            <Form.Check type="switch" label="vegan"/>
            <Form.Check type="switch" label="21plus"/>
            <Form.Check type="switch" label="petFriendly"/>
            <Form.Check type="switch" label="fullBar"/>
            </div>
          </FormGroup>
          <Button variant="primary" type="submit" id="submitButton">Go!</Button>
        </Form>
      </>
    );
  }
}

export default PinballForm;