import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews.js';

const ListDaycareFromYelp = (props) => {

  const renderDaycares = () => {
    return props.daycares.map((daycare) => {
      return (
        <div className="daycare-card" key={daycare.id}>
          <img className="daycare__img" src={daycare.image_url} alt={`daycare: ${daycare.name}`}/>
          <h1>{daycare.name}</h1>
          <h2>Rating: {daycare.rating}</h2>  
          <p>{daycare.location.display_address} | {daycare.display_phone} </p>
          <Reviews key={daycare.id} reviews={daycare.reviews}/>
        </div>
      );
    })
  }

    const getReviews = (event, daycare) =>  {   
      event.preventDefault();
      renderReviews(daycare)
    }

    return (  
      <div>  
        <ul>
          {renderDaycares()}
        </ul>
      </div> 
    )
}

export default connect(mapStateToProps)(ListDaycareFromYelp);