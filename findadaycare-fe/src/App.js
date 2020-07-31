import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <MainContainer/>
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);