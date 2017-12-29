import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_LOGIN_INFO,
  TOGGLE_LOGIN_HIDDEN,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_SIGN_UP_INFO,
  TOGGLE_SIGN_UP_HIDDEN,
  LOG_OFF
} from '../actions/auth.js'


const auth = (state = { user: {}, errors: {}, 
  loginHidden: true, signUpHidden: true }, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: { email: action.user.email, token: action.user.token},
        errors: {}
      })

    case LOGIN_FAILURE:
      let { email, password } = action.user

      return Object.assign({}, state, {
        user: { email, password },
        errors: { failedLogin: true, message: 'Your username and password do not match our records'}
      })

    case UPDATE_LOGIN_INFO:
      let field = action.event.name;
      let user = Object.assign({}, state.user)
      user[field] = action.event.value;

      return Object.assign({}, state, {
        user,
      })

    case TOGGLE_LOGIN_HIDDEN:
      return Object.assign({}, state, {
        loginHidden: !state.loginHidden
      })

    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        user: { email: action.user.email, token: action.user.token },
        errors: {} 
      })

    case SIGN_UP_FAILURE:
      return Object.assign({}, state, {
        user: { email: action.user.email, password: action.user.password },
        errors: { failedSignUp: true, message: action.errors.message }
      })

    case UPDATE_SIGN_UP_INFO:
      field = action.event.name;
      user = Object.assign({}, state.user)
      user[field] = action.event.value;

      return Object.assign({}, state, {
        user,
      })

    case TOGGLE_SIGN_UP_HIDDEN:
      return Object.assign({}, state, {
        signUpHidden: !state.signUpHidden
      })

    case LOG_OFF:
      return Object.assign({}, state, {
        user: {},
        errors: {}
      })

    default:
      return state
  }
}

export default auth
