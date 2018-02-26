import axios from 'axios'
import moment from 'moment'
import eventFormatter from '../helpers/event-formater'
import fbAPI from '../middleware/fbAPI'

import 'regenerator-runtime/runtime'
// import authHTTP from '../middleware/authHTTP'

export const REQUEST_EVENTS_SUCCESS = 'REQUEST_EVENTS_SUCCESS'
export const REQUEST_EVENTS_FAILED = 'REQUEST_EVENTS_FAILED'
export const INIT_FILTERS = 'INIT_FILTERS'
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER'
export const TOGGLE_TAG_FILTER = 'TOGGLE_TAG_FILTER'

export const TOGGLE_CREATE_EVENT_HIDDEN = 'TOGGLE_CREATE_EVENT_HIDDEN'
export const TOGGLE_PREVIEW_EVENT_HIDDEN = 'TOGGLE_PREVIEW_EVENT_HIDDEN'
export const EVENT_FILE_TO_BE_SENT = 'EVENT_FILE_TO_BE_SENT'

export const REQUEST_SINGLE_EVENT_SUCCESS = 'REQUEST_SINGLE_EVENT_SUCCESS'
export const REQUEST_SINGLE_EVENT_FAILURE = 'REQUEST_SINGLE_EVENT_FAILURE'

export const UPDATE_NEW_EVENT_INFO = 'UPDATE_NEW_EVENT_INFO'
export const CREATE_EVENT = 'CREATE_EVENT'
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

export const IMPORT_FB_EVENT = 'IMPORT_FB_EVENT'

const fetchEvents = () => async dispatch => {
  try {
    const eventData = await axios.get('https://stopmissingout.ca/api/v1/events')

    dispatch({ type: REQUEST_EVENTS_SUCCESS, events: eventData.data.payload })
  } catch (err) {
    console.log(err)
  }
}

const fetchSingleEvent = eventID => async dispatch => {
  try {
    const response = await axios.get(
      `https://stopmissingout.ca/api/v1/events/${eventID}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': process.env.QE_TOKEN,
        },
      }
    )

    let singleEvent = response.data.payload

    singleEvent = eventFormatter.dateFormat(singleEvent)

    dispatch({ type: REQUEST_SINGLE_EVENT_SUCCESS, singleEvent })
  } catch (err) {
    console.log(err)
  }
}

export const loadSingleEvent = eventID => dispatch =>
  dispatch(fetchSingleEvent(eventID))

export const loadEvents = () => dispatch => dispatch(fetchEvents())

export const postEvent = () => async (dispatch, getState) => {
  const formData = new FormData()
  const state = getState()
  const newEvent = getState().events.newEvent
  const imagefile = getState().events.fileToBeSent

  formData.append('eventImageFile', imagefile[0])

  const imageUpload = await axios.post(
    'https://stopmissingout.ca/api/v1/events/image-upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': process.env.QE_TOKEN,
      },
    }
  )

  newEvent.imageUrl = imageUpload.data.payload.location
  newEvent.startTime = moment(
    `${newEvent.selectedDay.format('YYYY-MM-DD')} ${newEvent.startTime.format(
      'HH:mm'
    )}`,
    'YYYY-MM-DD HH:mm'
  ).format()
  newEvent.endTime = moment(
    `${newEvent.selectedDay.format('YYYY-MM-DD')} ${newEvent.endTime.format(
      'HH:mm'
    )}`,
    'YYYY-MM-DD HH:mm'
  ).format()
  newEvent.selectedDay = undefined

  const newEventResponseDate = await axios.post(
    'https://stopmissingout.ca/api/v1/events',
    newEvent,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.QE_TOKEN,
      },
    }
  )

  // Remove this in final version
  console.log(newEventResponseDate)
}

export const importFBEvent = () => async (dispatch, getState) => {
  const { fbEventID } = getState().events.newEvent
  const api = fbAPI()
  const fbEvent = await api.getEventByID(fbEventID)
  console.log(fbEvent.data)
}

export const updateNewEventInfo = newEvent => ({
  type: UPDATE_NEW_EVENT_INFO,
  newEvent,
})

export const initFilters = () => dispatch => {
  const filters = {
    categories: {
      HEALTH: true,
      EDUCATION: true,
      SPORTS: true,
      CONCERTS: true,
      ARTS_AND_THEATER: true,
      SOCIALS: true,
    },
    tags: {
      FREE: true,
      '19+_SOCIALS': true,
      ALL_AGES: true,
    },
    sortBy: null,
    venue: null,
  }

  dispatch({ type: INIT_FILTERS, filters })
}
