export default (state = null, action) => {  
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    default:
      return state;
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}//last added