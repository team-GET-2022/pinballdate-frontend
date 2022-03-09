import React from 'react';
import Button from 'react-bootstrap/Button'
import '../header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <p>Pinball Date</p>
        <div className="navButtons">
          {/* Log-in: */}
         <Button>Log-in</Button>
          {/* Log-out: */}
          <Button>Log-out</Button>
          {/* Profile: */}
          <Button>Profile</Button>
        </div>
      </div>
    );
  }
}

export default Header;