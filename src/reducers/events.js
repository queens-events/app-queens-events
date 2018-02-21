import {
    REQUEST_EVENTS_SUCCESS,
    REQUESTS_EVENTS_FAILURE,
    TOGGLE_CATEGORY_FILTER,
    TOGGLE_TAG_FILTER,
    INIT_FILTERS,
    POST_EVENT,
    EDIT_EVENT,
    DELETE_EVENT,
    TOGGLE_CREATE_EVENT_HIDDEN,
    UPDATE_NEW_EVENT_INFO
} from '../actions/events'
import { EVENT_FILE_TO_BE_SENT, REQUEST_SINGLE_EVENT_SUCCESS } from '../actions/index';

const events = (state = { events: { events: {}, filters: {} }, newEvent: {}, createEventHidden: true }, action) => {
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
      case TOGGLE_CREATE_EVENT_HIDDEN:
        return Object.assign({}, state, {
          createEventHidden: !state.createEventHidden
        })

      case REQUEST_SINGLE_EVENT_SUCCESS:
        return Object.assign({}, state, {
          singleEvent: action.singleEvent
        })

      case EVENT_FILE_TO_BE_SENT:
        return Object.assign({}, state, {
          fileToBeSent: action.file
        })

      case UPDATE_NEW_EVENT_INFO:
        let field = action.newEvent.name;
        let newEvent = Object.assign({}, state.newEvent)
        newEvent[field] = action.newEvent.value;

        return Object.assign({}, state, {
          newEvent,
        })

      default:
        return state
    }
  }
  
  export default events