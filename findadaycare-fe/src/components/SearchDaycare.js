import React from 'react';
import { connect } from 'react-redux';
import { fetchDaycareFromYelp } from '../actions/searchDaycare.js';

class SearchDaycare extends React.Component {

  state = {
    zip: ''
  }

  handleZip = e => {
    this.setState({
      zip: e.target.value
    })
  }

  render() {
    return (
      <div>
        Hello  
      </div>
    )   
  }  
} 

export default SearchDaycare;