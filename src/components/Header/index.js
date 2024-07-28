import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/booking">Book Appointment</Link>
          <Link to="/history">Appointment History</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
