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
          Location Name
        </Card.Title>
          <Button onClick={()=>this.props.deleteUserFavorites(result.locationId)}>Delete</Button>
        </Card.Body>
      </Card>
    ))
    return favoritesArray;
  }

  render() {
    return (
      <>
        <h1>Favorites</h1>
        {this.getFavoritesArray()}
      </>
    )
  }
}

export default Favorites