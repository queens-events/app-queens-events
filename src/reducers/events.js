import {
    REQUEST_EVENTS,
    POST_EVENT,
    EDIT_EVENT,
    DELETE_EVENT,
    TOGGLE_CREATE_EVENT_HIDDEN
} from '../actions/events'

const events = (state = { events: { space: {}, time: {} }, createEventHidden: true }, action) => {
    switch(action.type) {
      case REQUEST_EVENTS:
        return Object.assign({}, state, {
          events: {}
        })

      case TOGGLE_CREATE_EVENT_HIDDEN:
        return Object.assign({}, state, {
          createEventHidden: !state.createEventHidden
        })

      default:
        return state
    }
  }
  
  export default events