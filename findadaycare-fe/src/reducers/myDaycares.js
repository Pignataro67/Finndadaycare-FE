const initialState = { daycares: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DAYCARES":
      state = {...state, daycares: action.payload}  
    return state
    case "ADD_DAYCARE":
      state = {...state, daycares: state.daycares.concat(action.payload)}  
    return state.daycares.data.attributes.my_daycares
      default:
    return state
  }
}