import React from 'react';
import { Container, Accordion } from 'react-bootstrap'


class ResultsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPinball: []
    }
  }

  render() {

    let pinballResults = [];


    return (
      <>
        <Container className = "results">
          <Accordion id="pinballResults">
            <Accordion.Item>
              sdfsdfsdfsdf
            </Accordion.Item>
          </Accordion>
          <Accordion id="restaurantResults">
            <Accordion.Item>
              sdfsdfsdfsdf
            </Accordion.Item>
          </Accordion>
        </Container>

      </>
    );
  }
}

export default ResultsDisplay;