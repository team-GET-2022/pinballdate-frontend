import React from 'react'
import '../favorites.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Favorites extends React.Component {

  getFavoritesArray() {
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
          <Button onClick={() => this.props.deleteUserFavorites(result.locationId.id)}>Delete</Button>
        </Card.Body>
      </Card>
    ))
    return favoritesArray;
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