import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Logout from './Logout.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const NavBar = ({ loggedIn }) => {
  return (
    <nav className="NavBar">
      <div>
      <NavLink exact to="/search">Search </NavLink> 
      <NavLink exact to="/my-daycares"> My Daycares </NavLink> 
        { loggedIn ? <NavLink exact to="/logout"> Logout </NavLink> : <NavLink exact to="/login" >Login</NavLink>} <br></br>
      </div>
      <br></br>
    </nav>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);