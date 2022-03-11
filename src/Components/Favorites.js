import React from 'react'
import '../favorites.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class Favorites extends React.Component {

  getFavoritesArray() {
    this.props.getUserFavorites();
    let favoritesArray = [];
    console.log(this.props.favoritePinballLocations);
    this.props.favoritePinballLocations.forEach((result, i) => favoritesArray.push(
      <Card style={{ width: '25rem' }} key={i}>
        <Card.Body>
          <Card.Title>
            {result.locationId.name}
          </Card.Title>
          <img src={result.locationId.location_machine_xrefs[0].machine.opdb_img} alt="Pinball" />

          {result.locationId.street}, {result.locationId.city}  {result.locationId.state}
          <br />{result.locationId.zip}

          <br/> <h3>Machines Available:</h3>
          <ListGroup>
            {this.getMachinesArray(result.locationId.location_machine_xrefs)}
          </ListGroup>
          <Button onClick={() => this.props.deleteUserFavorites(result.locationId.id)}>Delete</Button>
        </Card.Body>
      </Card>
    ))
    return favoritesArray;
  }

  getMachinesArray(xrefs){
    let machinesArray = [];
    xrefs.forEach((xref,i)=> machinesArray.push(
      <ListGroupItem key={i}>
      {xref.machine.name} ({xref.machine.year})
    </ListGroupItem>
    ))
    return machinesArray;
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