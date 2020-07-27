export const setCurrentUser = user => {
  return {
      type: "SET_CURRENT_USER",
    user
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
      "Content-type": "application/json"
    },
      body: JSON.stringify({email: "user@test.com", username: "test", password: "secret"})
    })
  }
} 