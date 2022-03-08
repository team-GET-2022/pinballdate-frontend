import React from 'react';
import { Container, Accordion } from 'react-bootstrap'


class ResultsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPinball: [],
      pinballResults: [],
      userPreferences: []
    }
  }

  //In props: pinballResults, userPreferences

  render() {

    return (
      <>
        <Container className="results">
          <Accordion id="pinballResults" className="w-50 m-3 p-2">

            {/* these will be dynamically generated using array.map */}
            <Accordion.Item key="i">
              <Accordion.Header>
                Title Text Goes here
              </Accordion.Header>
              <Accordion.Body>
                <img src="https://place-hold.it/200x200" alt="Pinball"></img>
                Body content goes here
                <ul>
                  <li>Machine 1</li>
                  <li>Machine 2</li>
                  <li>Machine 3</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
          <Accordion id="restaurantResults" className="w-50 m-3 p-2">
            {/* these will be dynamically generated using array.map */}
            <Accordion.Item key="i">
              <Accordion.Header>
                Title Text Goes here
              </Accordion.Header>
              <Accordion.Body>
                Body content goes here
                <ul>
                  <li>Address</li>
                  <li>Hours</li>
                  <li>Rating</li>
                </ul>
                <img src="https://place-hold.it/200x200" alt="Pinball"></img>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>

      </>
    );
  }
}

export default ResultsDisplay;