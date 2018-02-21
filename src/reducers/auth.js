import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_LOGIN_INFO,
  CLEAR_LOGIN_FORM,
  TOGGLE_LOGIN_HIDDEN,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_SIGN_UP_INFO,
  CLEAR_SIGN_UP_FORM,
  TOGGLE_SIGN_UP_HIDDEN,
  LOG_OFF
} from '../actions/auth.js'


const auth = (state = { user: {}, errors: {}, 
  loginHidden: false, signUpHidden: false }, action) => {
  
    let username
    let email
    let password
    let confirm_password
  
    switch(action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: { email: action.user.email, token: action.user.token},
        errors: {}
      })

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
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

    case CLEAR_LOGIN_FORM:
      email = ''
      password = ''
    
      return Object.assign({}, state, {
        user: { email, password },
        errors: {}
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

    case CLEAR_SIGN_UP_FORM:
      username = ''
      email = ''
      password = ''
      confirm_password = ''
    
      return Object.assign({}, state, {
        user: { username, email, password, confirm_password },
        errors: {}
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
