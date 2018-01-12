import axios from 'axios'
import moment from 'moment'
import authHTTP from '../middleware/authHTTP'

export const REQUEST_EVENTS_SUCCESS = 'REQUEST_EVENTS_SUCCESS'
export const REQUEST_EVENTS_FAILED = 'REQUEST_EVENTS_FAILED'
export const INIT_FILTERS = 'INIT_FILTERS'
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER'
export const TOGGLE_TAG_FILTER = 'TOGGLE_TAG_FILTER'
export const TOGGLE_CREATE_EVENT_HIDDEN = 'TOGGLE_CREATE_EVENT_HIDDEN'
export const EVENT_FILE_TO_BE_SENT = 'EVENT_FILE_TO_BE_SENT'

export const UPDATE_NEW_EVENT_INFO = 'UPDATE_NEW_EVENT_INFO'
export const CREATE_EVENT = 'CREATE_EVENT'
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const eventData = await axios.get('https://stopmissingout.ca/api/v1/events');

      dispatch({ type: REQUEST_EVENTS_SUCCESS, events: eventData.data.payload })
    } catch (err) {
      console.log(err)
    }
  }
}
  
export const loadEvents = () => (dispatch) => {
  return dispatch(fetchEvents())
}

export const postEvent = () => async (dispatch, getState) => {
  let formData = new FormData();
  let state = getState()
  let newEvent = getState().events.newEvent
  let imagefile = getState().events.fileToBeSent

  formData.append("eventImageFile", imagefile[0]);

  let imageUpload = await axios.post('https://stopmissingout.ca/api/v1/events/image-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': process.env.QE_TOKEN
      }
  })

  newEvent["imageUrl"] = imageUpload.data.payload.location
  newEvent["startTime"] = moment(`${newEvent.selectedDay.format("YYYY-MM-DD")} ${newEvent.startTime.format("HH:mm")}`, "YYYY-MM-DD HH:mm").format()
  newEvent["endTime"] = moment(`${newEvent.selectedDay.format("YYYY-MM-DD")} ${newEvent.endTime.format("HH:mm")}`, "YYYY-MM-DD HH:mm").format()
  newEvent["selectedDay"] = undefined
  console.log(newEvent);
  
  let newEventResponseDate = await axios.post('https://stopmissingout.ca/api/v1/events', newEvent, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': process.env.QE_TOKEN
    }
  })

  console.log(newEventResponseDate)
}

export const updateNewEventInfo = (newEvent) => {
  return { type: UPDATE_NEW_EVENT_INFO, newEvent }
}

export const initFilters = () => (dispatch) => {
  const filters = {
    categories: {
      HEALTH: true,
      EDUCATION: true,
      SPORTS: true,
      CONCERTS: true,
      ARTS_AND_THEATER: true,
      SOCIALS: true
    },
    tags: {
      FREE: true,
      '19+_SOCIALS': true,
      ALL_AGES: true
    },
    sortBy: null,
    venue: null
  }

  dispatch({type: INIT_FILTERS, filters})
}