import React from 'react'
import '../favorites.css'

class Favorites extends React.Component {
  render() {
    return (
      // <p>{this.props.favoritePinballLocations}</p>
      <ul>
        <li>{this.props.favoritePinballLocations[0].name}</li>
        <li>{this.props.favoritePinballLocations[0].street}</li>
        <li>{this.props.favoritePinballLocations[0].id}</li>
      </ul>
    )
  }
}

export default Favorites