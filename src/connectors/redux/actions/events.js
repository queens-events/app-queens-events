import axios from 'axios'
import moment from 'moment'

export const REQUEST_EVENTS_SUCCESS = 'REQUEST_EVENTS_SUCCESS'
export const REQUEST_EVENTS_FAILED = 'REQUEST_EVENTS_FAILED'
export const INIT_FILTERS = 'INIT_FILTERS'
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER'
export const TOGGLE_TAG_FILTER = 'TOGGLE_TAG_FILTER'
export const TOGGLE_CREATE_EVENT_HIDDEN = 'TOGGLE_CREATE_EVENT_HIDDEN'
export const EVENT_FILE_TO_BE_SENT = 'EVENT_FILE_TO_BE_SENT'

export const REQUEST_SINGLE_EVENT_SUCCESS = 'REQUEST_SINGLE_EVENT_SUCCESS'
export const REQUEST_SINGLE_EVENT_FAILURE = 'REQUEST_SINGLE_EVENT_FAILURE'

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

const fetchSingleEvent = (eventID) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://stopmissingout.ca/api/v1/events/${eventID}`, 
      { 
        headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.QE_TOKEN
      }})

      let singleEvent = response.data.payload
  
      let startDateTime = moment(singleEvent.startTime).add(5, 'hours')
                
      singleEvent.date = startDateTime.format('D')
      singleEvent.month = startDateTime.format('MMM')
      
      singleEvent.startTime = startDateTime.format('LT')
      singleEvent.endTime = moment(singleEvent.endTime).add(5, 'hours').format('LT')

      singleEvent.venue = singleEvent.venueString || singleEvent.venue

      console.log(singleEvent);

      dispatch({ type: REQUEST_SINGLE_EVENT_SUCCESS, singleEvent })
    } catch(err) {
      console.log(err);
    }
  }  
    
}

export const loadSingleEvent = (eventID) =>  (dispatch) => {
  return dispatch(fetchSingleEvent(eventID))
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

  const imageUpload = await axios.post('https://stopmissingout.ca/api/v1/events/image-upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token': process.env.QE_TOKEN,
    },
  })

  newEvent["imageUrl"] = imageUpload.data.payload.location
  newEvent["startTime"] = moment(`${newEvent.selectedDay.format("YYYY-MM-DD")} ${newEvent.startTime.format("HH:mm")}`, "YYYY-MM-DD HH:mm").format()
  newEvent["endTime"] = moment(`${newEvent.selectedDay.format("YYYY-MM-DD")} ${newEvent.endTime.format("HH:mm")}`, "YYYY-MM-DD HH:mm").format()
  newEvent["selectedDay"] = undefined

  const newEventResponseDate = await axios.post('https://stopmissingout.ca/api/v1/events', newEvent, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': process.env.QE_TOKEN
    },
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