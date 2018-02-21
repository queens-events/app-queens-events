import axios from 'axios'

const createAuthHttp = async token => {
  const authHttp = axios.create({
    baseURL: 'https://stopmissingout.ca',
    headers: {
      Authorization: token,
    },
  })

  return authHttp
}

export default createAuthHttp
