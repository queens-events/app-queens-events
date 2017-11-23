const auth = (state = { user: {}, errors: {} }, action) => {
  switch(action.type) {
    case 'LOGIN':
      return state.user = {
        username: action.username,
        email: action.email,
        token: action.token
      }

    case 'SIGN_UP':
      return state.user = {
        username: action.username,
        email: action.email,
        token: action.token
      }

    default:
      return state
  }
}