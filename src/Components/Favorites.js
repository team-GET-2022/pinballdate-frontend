import React from 'react'
import '../favorites.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'

class Favorites extends React.Component {

  getFavoritesArray() {
    // this.props.getUserFavorites();
    let favoritesArray = [];
    this.props.favoritePinballLocations.forEach((result, i) => favoritesArray.push(
      <Card style={{ width: '25rem' }} key={i}>
        <Card.Body>
          <Card.Title>
            {result.name}
          </Card.Title>
          <img src={result.location_machine_xrefs[0].machine.opdb_img} alt="Pinball" />

          <p>{result.street}, {result.city}  {result.state}
          <br />{result.zip}</p>

          <br/> <h3>Machines Available:</h3>
          <ListGroup>
            {this.getMachinesArray(result.location_machine_xrefs)}
            <ListGroup.Item>
              <Form onSubmit={(e) => this.props.updateUserFavorites(e, result)}>
                <Form.Group controlId='score'>
                  <Form.Label>High Scores: {result.score ? result.score : ''}</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Button className="updateButton"type='submit'>Add/Update</Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
          <Button variant="dark" className="deleteButton" onClick={() => this.props.deleteUserFavorites(result.id)}>Delete</Button>
        </Card.Body>
      </Card>
    ))
    return favoritesArray;
  }

  getMachinesArray(xrefs){
    let machinesArray = [];
    xrefs.forEach((xref,i)=> machinesArray.push(
      <ListGroup.Item key={i}>
      {xref.machine.name} ({xref.machine.year})
    </ListGroup.Item>
    ))
    return machinesArray;
  }
  componentDidMount() {
    console.log('component did mount');
    this.props.getUserFavorites();
  }
  render() {
    return (
      <>
        <h1>Favorites</h1>
        <div className="cardHolder">
          {this.getFavoritesArray()}
        </div>
      </>
    )
  }
}

export default Favorites