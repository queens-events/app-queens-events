const auth = (state = { user: {}, errors: {} }, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        user: { email: action.user.email, token: action.user.token},
        errors: {}
      })

    case 'LOGIN_FAILURE':
      let { email, password } = action.user

      return Object.assign({}, state, {
        user: { email, password },
        errors: { failedLogin: true, message: 'Your username and password do not match our records'}
      })

    case 'UPDATE_LOGIN_INFO':
      let field = action.event.name;
      let user = Object.assign({}, state.user)
      user[field] = action.event.value;

      return Object.assign({}, state, {
        user,
      })

    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state, {
        user: { email: action.user.email, token: action.user.token },
        errors: {} 
      })

    case 'SIGN_UP_FAILURE':
      return Object.assign({}, state, {
        user: { email: action.user.email, password: action.user.password },
        errors: { failedSignUp: true, message: action.errors.message }
      })

    case 'UPDATE_SIGN_UP_INFO':
      field = action.event.name;
      user = Object.assign({}, state.user)
      user[field] = action.event.value;

      return Object.assign({}, state, {
        user,
      })

    case 'LOG_OFF':
      return Object.assign({}, state, {
        user: {},
        errors: {}
      })

    default:
      return state
  }
}

export default auth
