import axios from 'axios'
import 'regenerator-runtime/runtime'

const fbAPI = () => {
  return {
    eventFields: [
      "id",
      "name",
      "cover",
      "description",
      "category",
      "start_time",
      "end_time",
      "place",
    ].join(','),

    api:
      axios.create({
        baseURL: "https://graph.facebook.com",
        headers: {
          Authorization: `Bearer ${process.env.FB_ACCESS_TOKEN}`
        }
      }),

    async getEventByID(fbEventID) {
      return await this.api.get(`/${fbEventID}?fields=${this.eventFields}`)
    },
  }
}


export default fbAPI