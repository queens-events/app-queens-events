import {
    REQUEST_EVENTS,
    POST_EVENT,
    EDIT_EVENT,
    DELETE_EVENT
} from '../actions/events'

const events = (state = { events: { space: {}, time: {} }}, action) => {
    switch(action.type) {
      case REQUEST_EVENTS:
        return Object.assign({}, state, {
          events: {}
        })
  
      default:
        return state
    }
  }
  
  export default events