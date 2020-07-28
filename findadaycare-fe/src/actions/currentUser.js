export const setCurrentUser = user => {
  return {
      type: "SET_CURRENT_USER",
    user
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      credentials: "include",
      method: "POST",
      headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({credentials})
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
      alert(user.error)
    } else {
      dispatch(setCurrentUser(user))
        console.log("Sucess, you are logged in")
      }
    })
    .catch(console.log("pass")) 
  }
} 