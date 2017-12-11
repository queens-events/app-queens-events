import axios from 'axios'
import authHTTP from '../middleware/authHTTP'
import validator from '../helpers/validator.js'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const UPDATE_SIGN_UP_INFO = 'UPDATE_SIGN_UP_INFO'

const fetchLogin = (postData) => {
  return async (dispatch) => {
    try {
      const { email } = postData
      const loginData = await axios.post('https://stopmissingout.ca/authenticate', postData);

      if (loginData.data.success == true) {
        const token = loginData.data.payload;
        dispatch({ type: LOGIN_SUCCESS, user: { email, token } })
      }
      else {
        dispatch({ type: LOGIN_FAILURE, user: { email: '', password: '' } })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const loadLogin = () => (dispatch, getState) => {
  const state = getState()
  const loginData = state.auth.user
  return dispatch(fetchLogin(loginData))
}

export const updateLoginInfo = (event) => {
  return { type: UPDATE_LOGIN_INFO, event }
}

const fetchSignUp = (postData) => {
  return async (dispatch) => {
    try {
      const { email } = postData
      const loginData = await axios.post('https://stopmissingout.ca/authenticate/signup', postData);
      console.log(loginData);
      if (loginData.data.success == true) {
        const token = loginData.data.payload;
        dispatch({ type: SIGN_UP_SUCCESS, user: { email, token } })
      }
      else {
        const user = {
          email: '', 
          password: '',
          confirm_password: ''
        }

        dispatch({ type: SIGN_UP_FAILURE, user })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const loadSignUp = () => (dispatch, getState) =>{
  const state = getState()
  const signUpData = state.auth.user
  return dispatch(fetchSignUp(signUpData))
}

export const updateSignUpInfo = (event) => {
  return { type: UPDATE_SIGN_UP_INFO, event }
}