import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar" >
      { currentUser ? <Logout/> : <Login/> }
    </div>
  )
}

export default NavBar;