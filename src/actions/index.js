import axios from 'axios'
import authHTTP from '../middleware/authHTTP'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO'

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