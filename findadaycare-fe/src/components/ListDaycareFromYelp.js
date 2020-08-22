import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews.js';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

const ListDaycareFromYelp = (props) => {

  const handleOnClick = (e, daycare) => {
    e.preventDefault();
    console.log("Inside handleOnClick")
    props.fetchAddDaycare(daycare)
  }

  const renderDaycares = () => {
    return props.daycares.map((daycare) => {
      return (
        <li className="daycare-card" key={daycare.id}>
          <img className="daycare__img" src={daycare.image_url} alt={`daycare: ${daycare.name}`}/>
          <h1>{daycare.name}</h1>
          <h2>Rating: {daycare.rating}</h2>  
          <p>{daycare.location.display_address} | {daycare.display_phone} </p>
          <Reviews reviews={daycare.reviews}/>
          <button onClick={(e) => handleOnClick(e, daycare)}>Add Daycare to my list</button>
        </li>
      );
    })
  }

  
  return (  
    <div>  
      <ul>
        {renderDaycares()}
      </ul>
    </div> 
  )
}

<h2 className="daycare__rating">Rating: {daycare.rating}</h2>  
                    <Reviews reviews={daycare.reviews}/>
                    {/* </div> */}
                    <Button onClick={(e) => handleOnClick(e, daycare)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className="daycare__button" 
                        startIcon={<SaveIcon />}
                    >
                        Bookmark
                    </Button>

const mapStateToProps = state => {
  return {
      daycares: state.daycaresFromYelp.daycares
  }
}

export default connect(mapStateToProps, {fetchAddDaycare})(ListDaycareFromYelp);