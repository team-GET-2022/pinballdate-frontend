import React from 'react';
import Button from 'react-bootstrap/Button'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'
import '../header.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <p>Pinball Date</p>
        <div className="navButtons">
          {/* If user not logged in, show Login button: */}
          {!this.props.auth0.user && <LoginButton />}

          {/* If user logged in, show Log-out button and profile: */}
          {this.props.auth0.user && <>
            <LogoutButton />
            <Nav.Item><Link to="/" className='nav-link'><Button>Home Page</Button></Link> </Nav.Item>
            <Nav.Item><Link to="/favorites" className='nav-link'><Button>Favorites</Button></Link> </Nav.Item>
          </>}
        </div>
      </div>
    );
  }
}

export default withAuth0(Header);