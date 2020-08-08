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