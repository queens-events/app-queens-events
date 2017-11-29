import axios from 'axios'
import authHTTP from '../middleware/authHTTP'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const fetchLogin = async (loginData) => {
  try {
    const { email, password } = loginData
    const loginData = await axios.post('https://stopmissingout.ca/authenticate', postData);

    if (loginData.data.success == true) {
      const token = loginData.data.payload;

      return { type: LOGIN_SUCCESS, email, token, }
    }
    else {
      return { type: LOGIN_FAILURE, email: '', password: '' }
    }
  } catch(err) {
    console.log('Error thrown', err)
  }
}

export const loadLogin = (loginData) => (dispatch, getState) => {
  return dispatch(fetchLogin(loginData))
}