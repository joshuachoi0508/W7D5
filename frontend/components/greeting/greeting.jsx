import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </nav>
  )

  const personalGreeting = () => (
    <nav className="header-group">
      <h2>Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  )

  if (currentUser) {
    return personalGreeting();
  } else {
    return sessionLinks();
  };
}

export default Greeting;
