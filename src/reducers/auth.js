const auth = (state = { user: {}, errors: {} }, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return state.user = {
        email: action.email,
        token: action.token
      }
    
    case 'LOGIN_FAILURE':
      state.user = action.user
      state.errors.failedLogin = 'Your username and password do not match our records'
      return state

    case 'SIGN_UP_SUCCESS':
      return state.user = {
        username: action.username,
        email: action.email,
        token: action.token
      }

    default:
      return state
  }
}