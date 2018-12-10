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
    <hrgroup className="header-group">
      <h2>Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hrgroup>
  )

  if (currentUser) {
    return personalGreeting();
  } else {
    return sessionLinks();
  };
}