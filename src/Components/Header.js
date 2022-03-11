import React from 'react';
import Button from 'react-bootstrap/Button'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'
import '../header.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        {/* <p>Pinball Date</p> */}
        <div className="navButtons">
          {/* If user not logged in, show Login button: */}
          {!this.props.auth0.user && <LoginButton postNewUser={this.props.postNewUser} />}

          {/* If user logged in, show Log-out button and profile: */}
          {this.props.auth0.user && <>
            <LogoutButton />
            <Link to="/" className='nav-link'><Button>Home</Button></Link>
            <Link to="/favorites" className='nav-link'><Button>Favorites</Button></Link>
          </>}
          <Button onClick={()=>this.props.toggleAboutUsModal()}>About Us</Button>
        </div>
      </div>
    );
  }
}

export default withAuth0(Header);