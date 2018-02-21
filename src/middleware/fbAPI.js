import axios from 'axios'

export default fbAPI = () => {
  const graphAPIString = "https://graph.facebook.com"
  const eventFields = [
    id,
    cover,
    description,
    category,
    start_time,
    end_time,
    place,name
  ].join(',')

  const api = axios.create({
    baseURL: graphAPIString,
    headers: {
      Authorization: process.env.FB_ACCESS_TOKEN
    }
  })

  getEventByID(fbEventID) = async () => {
    const eventResponse = api.get(`/${fbEventID}?fields=${eventFields}`)
    console.log(eventResponse)
  }
}