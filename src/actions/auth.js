import axios from 'axios'
import validator from '../helpers/validator.js'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO'
export const TOGGLE_LOGIN_HIDDEN = 'TOGGLE_LOGIN_HIDDEN'
export const CLEAR_LOGIN_FORM = 'CLEAR_LOGIN_FORM'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export const UPDATE_SIGN_UP_INFO = 'UPDATE_SIGN_UP_INFO'
export const TOGGLE_SIGN_UP_HIDDEN = 'TOGGLE_SIGN_UP_HIDDEN'
export const CLEAR_SIGN_UP_FORM = 'CLEAR_SIGN_UP_FORM'

export const LOG_OFF = 'LOG_OFF'

const fetchLogin = postData => async dispatch => {
  try {
    const { email } = postData
    const loginData = await axios.post(
      'https://stopmissingout.ca/authenticate',
      postData
    )

    if (loginData.data.success == true) {
      const token = loginData.data.payload

      // window.sessionStorage.accessToken = token;

      dispatch({ type: LOGIN_SUCCESS, user: { email, token } })
    } else {
      dispatch({ type: LOGIN_FAILURE, user: { email: '', password: '' } })
    }
  } catch (err) {
    console.log(err)
  }
}

export const loadLogin = () => (dispatch, getState) => {
  const state = getState()
  const loginData = state.auth.user
  return dispatch(fetchLogin(loginData))
}

export const updateLoginInfo = event => ({ type: UPDATE_LOGIN_INFO, event })

export const toggleLoginHidden = () => ({ type: TOGGLE_LOGIN_HIDDEN })

const fetchSignUp = postData => async dispatch => {
  try {
    const { email, password, confirm_password } = postData
    const blankUser = {
      email: '',
      password: '',
      confirm_password: '',
    }

    if (!validator.validateEmail(email)) {
      const message =
        'The email given is invalid (perhaps doesn not include @ or domain name)'
      dispatch({ type: SIGN_UP_FAILURE, user: blankUser, errors: { message } })
    } else if (password !== confirm_password) {
      const message = 'Password and confirm password do not match.'
      dispatch({ type: SIGN_UP_FAILURE, user: blankUser, errors: { message } })
    } else {
      const loginData = await axios.post(
        'https://stopmissingout.ca/authenticate/signup',
        postData
      )

      if (loginData.data.success == true) {
        const token = loginData.data.payload
        dispatch({ type: SIGN_UP_SUCCESS, user: { email, token } })
      } else {
        dispatch({ type: SIGN_UP_FAILURE, user: blankUser })
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export const loadSignUp = () => (dispatch, getState) => {
  const state = getState()
  const signUpData = state.auth.user
  return dispatch(fetchSignUp(signUpData))
}

export const updateSignUpInfo = event => ({ type: UPDATE_SIGN_UP_INFO, event })

export const toggleSignUpHidden = () => ({ type: TOGGLE_SIGN_UP_HIDDEN })

export const clearSignUpForm = () => ({ type: CLEAR_SIGN_UP_FORM })

export const clearLoginForm = () => ({ type: CLEAR_LOGIN_FORM })
