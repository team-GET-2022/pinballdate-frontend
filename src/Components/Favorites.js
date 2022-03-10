import React from 'react'
import '../favorites.css'

class Favorites extends React.Component {
  render() {
    return (
      <p>{this.props.favoritePinballLocations}</p>
    )
  }
}

export default Favorites