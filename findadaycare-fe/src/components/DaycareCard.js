import React from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
import { updateDaycareForm, fetchUpdateDaycare } from '../actions/daycareForm.js';
import { fetchDeleteDaycare } from '../actions/myDaycares.js';

class DaycareCard extends React.Component {

  handleInputChange = e => {
    const { name, value } = e.target;
    const updateDaycareInfo = {
      ...this.props.daycareFormData,
    [name]: value
  }
  console.log("my daycareformdata is: ", updateDaycareInfo)
  this.props.updateDaycareForm(updateDaycareInfo)
}

handleSubmit = (e) => {
  e.preventDefault()
  const userId = this.props.user.id
  const daycareId = this.props.daycare.id
  this.props.fetchUpdateDaycare(this.props.daycareFormData, userId, daycareId)
}

handleDeleteDaycare = (e, daycare, user )  => {
  e.preventDefault();
  this.props.fetchDeleteDaycare(daycare, user.id)
} // NEW

  render() {
    return (
      <div key={this.props.daycare.id}>
        <h1>{this.props.daycare.name}</h1>
          <p>Location: {this.props.daycare.location}</p>
          <p>Rating: {this.props.daycare.rating}</p>
          <p>phone: {this.props.daycare.phone}</p>

            <form>
              <label> Notes: 
                <input type="text" placeholder={this.props.daycare.notes} value={this.props.daycare.notes}/>
              </label> <br></br>
              <label> Schedule a Visit
                <input type="text" placeholder={this.props.daycare.schedule_visit} value={this.props.daycare.schedule_visit}/>
              </label> <br></br>
              <label> Favorite
                <input type="text" placeholder={this.props.daycare.favorite} value={this.props.daycare.favorite}/>
              </label> <br></br>
                <input type="submit" value="update daycare"/>
            </form>
      </div>
    )
  }
}

export default DaycareCard;