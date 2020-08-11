import React from 'react';
import { connect } from 'react-redux';
import { fetchGetDaycare } from '../actions/myDaycares.js';
import DaycareCard from './DaycareCard.js';

class MyDaycares extends React.Component {

  componentDidMount() {
    this.props.fetchGetDaycare()
  }

  render(){
    return (
      <div>
        {this.props.daycares.length > 0 ? this.props.daycares.map(daycare => <DaycareCard key={daycare.id} daycare={daycare}/>) : null }
      </div>
    );
  }     
}

export default MyDaycares;