import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';

const Logout = ({ logout, history }) => {
  const classes = useStyles();
  return (
    <form onSubmit={ e => {
      e.preventDefault();
      logout()
      history.push('/')
    }}>
      <Button 
        color="secondary" 
        className={classes.button}
        type="submit">
        Logout
      </Button>    
    </form>
    )
  }

  export default Logout;