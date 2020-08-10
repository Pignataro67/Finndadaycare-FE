export const addDaycare = (bussiness) => {
  return {
    type: 'ADD_DAYCARE',
      payload: bussiness
  }
}

export const getDaycares = (bussiness) => {
  return {
    type: 'GET_DAYCARE',
    payload: bussiness
  }
}

export const fetchGetDaycare = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/users/1`, {
      method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
        .then(data =>  { 
          if (data.error) {
            alert(data.error)
          } else {
    const myDaycares = data.attributes.my_daycare
      dispatch(getDaycares(myDaycares))
    }
  })
  .catch(console.log)
  }
} 

// adding daycare to the backend
export const fetchAddDaycare = (bussiness) => {
  const daycare = {
    name: bussiness.name,
      location: bussiness.location.display_address.toString(),
      rating: bussiness.rating,
      review_count: bussiness.review_count,
      yelp_id: bussiness.id,
      phone: bussiness.display_phone
  }
  return dispatch => {
    const url = 'http://localhost:3001/api/v1/daycares'
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(daycare)
      }).then(res => res.json())
        .then(data => {
      if (data.error){
        alert(data.error)
      } else {
    dispatch(addDaycare(data))
      alert('Successfully bookmarked');
    }
  })
  .catch(console.log)
  }
}