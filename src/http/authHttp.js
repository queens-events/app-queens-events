import axios from 'axios'

const createAuthHttp = async (token) => {
    const authHttp = axios.create({
        baseURL: 'localhost:1337',
        headers: {
            Authorization: token
        }
    });

    return authHttp
}

export default createAuthHttp