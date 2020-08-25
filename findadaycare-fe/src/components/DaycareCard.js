import React from 'react';
import { connect } from 'react-redux';
import { updateDaycareForm, fetchUpdateDaycare, resetDaycareForm } from '../actions/daycareForm.js';
import { fetchDeleteDaycare } from '../actions/myDaycares.js';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

class DaycareCard extends React.Component {

useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
}));

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
  this.props.fetchUpdateDaycare(this.props.daycareFormData, this.props.daycare.notes, userId, daycareId)
}

handleDeleteDaycare = (e, daycare, user )  => {
  e.preventDefault();
  this.props.fetchDeleteDaycare(daycare, user.id)
}

  render() {
    return (
      <div key={this.props.daycare.id}>
        <h1>{this.props.daycare.name}</h1>
        <p>Location: {this.props.daycare.location}</p>
        <p>Rating: {this.props.daycare.rating} | Phone: {this.props.daycare.phone}</p>
          <form onSubmit={this.handleSubmit}>
            <label> Notes: 
              <input onChange={this.handleInputChange} type="text" placeholder={this.props.daycare.notes}  name="notes" value={this.props.daycare.notes}/>
            </label> <br></br>
            <label> Schedule a Visit
              <input onChange={this.handleInputChange} type="text" placeholder={this.props.daycare.schedule_visit} name="scheduleVisit" value={this.props.daycare.schedule_visit}/>
            </label> <br></br>
              <input type="submit" value="Save"/> 
          </form> 
            <button onClick={(e) => this.handleDeleteDaycare(e, this.props.daycare, this.props.user)} >Delete</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    daycareFormData: state.daycareForm,
  }
}

export default connect( mapStateToProps, { fetchDeleteDaycare, updateDaycareForm, fetchUpdateDaycare })(DaycareCard);