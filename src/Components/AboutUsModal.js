import React from 'react';
import { Modal, Button , Card} from 'react-bootstrap'

class AboutUsModal extends React.Component {

  render() {
    return (
      <>
        <Modal.Header>
          <Modal.Body>
            Hello
            <Card>
              <Card.Title>Dan Brian</Card.Title>
              <Card.Body>
                <img src="../img/dan.png" alt="Dan portrait"/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <a href="https://github.com/dbrian57">GitHub</a>
              </Card.Body>
            </Card>

            <Button onClick={() => this.props.toggleAboutUsModal()}>Close</Button>
          </Modal.Body>
        </Modal.Header>
      </>
    )
  }
}

export default AboutUsModal;