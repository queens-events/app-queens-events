import axios from 'axios'
import authHTTP from '../middleware/authHTTP'

export const REQUEST_EVENTS_SUCCESS = 'REQUEST_EVENTS_SUCCESS'
export const REQUEST_EVENTS_FAILED = 'REQUEST_EVENTS_FAILED'
export const INIT_FILTERS = 'INIT_FILTERS'
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER'
export const CREATE_EVENT = 'CREATE_EVENT'
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const eventData = await axios.get('http://localhost:1337/api/v1/events');

      dispatch({ type: REQUEST_EVENTS_SUCCESS, events: eventData.data.payload })
    } catch (err) {
      console.log(err)
    }
  }
}
  
export const loadEvents = () => (dispatch) => {
  return dispatch(fetchEvents())
}

export const initFilters = () => (dispatch) => {
  const filters = {
    categories: {
      HEALTH: true,
      EDUCATION: true,
      SPORTS: true,
      CONCERTS: true,
      ARTS_AND_THEATRE: true,
      SOCIALS: true
    },
    tags: {
      FREE: true,
      ALL_AGES: true
    },
    sortBy: null,
    venue: null
  }

  dispatch({type: INIT_FILTERS, filters})
}