import {
    REQUEST_EVENTS_SUCCESS,
    REQUESTS_EVENTS_FAILURE,
    TOGGLE_CATEGORY_FILTER,
    TOGGLE_TAG_FILTER,
    INIT_FILTERS,
    POST_EVENT,
    EDIT_EVENT,
    DELETE_EVENT
} from '../actions/events'

const events = (state = { events: { events: {}, filters: {} }}, action) => {
    let categories;
  
    switch(action.type) {
      case REQUEST_EVENTS_SUCCESS:
      return Object.assign({}, state, {
          events: action.events
        })
      case INIT_FILTERS:
        return Object.assign({}, state, {
          filters: action.filters
        })
      case TOGGLE_CATEGORY_FILTER:
        return Object.assign({}, state, {
          filters: Object.assign({}, state.filters, { categories: action.filterState })
        })
      case TOGGLE_TAG_FILTER:
        return Object.assign({}, state, {
          filters: Object.assign({}, state.filters, { tags: action.filterState })
        })
      default:
        return state
    }
  }
  
  export default events