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
  TOGGLE_PREVIEW_EVENT_HIDDEN,
  CLEAR_NEW_EVENT_INFO,
  UPDATE_NEW_EVENT_INFO,
  UPDATE_NEW_EVENT_WITH_FB,
} from '../actions/events'
import {
  EVENT_FILE_TO_BE_SENT,
  REQUEST_SINGLE_EVENT_SUCCESS,
} from '../actions/index'

const events = (
  state = {
    events: { events: {}, filters: {} },
    newEvent: {},
    createEventHidden: true,
    previewEventHidden: true,
  },
  action
) => {
  let categories
  let newEvent

  switch (action.type) {
    case REQUEST_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        events: action.events,
      })
    case INIT_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      })
    case TOGGLE_CATEGORY_FILTER:
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, {
          categories: action.filterState,
        }),
      })
    case TOGGLE_TAG_FILTER:
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, { tags: action.filterState }),
      })

    case TOGGLE_CREATE_EVENT_HIDDEN:
      return Object.assign({}, state, {
        createEventHidden: !state.createEventHidden,
      })

    case TOGGLE_PREVIEW_EVENT_HIDDEN:
      return Object.assign({}, state, {
        previewEventHidden: !state.previewEventHidden,
      })

    case REQUEST_SINGLE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        singleEvent: action.singleEvent,
      })

    case EVENT_FILE_TO_BE_SENT:
      return Object.assign({}, state, {
        fileToBeSent: action.file,
      })

    case UPDATE_NEW_EVENT_INFO:
      const field = action.newEvent.name
      newEvent = Object.assign({}, state.newEvent)
      newEvent[field] = action.newEvent.value

      return Object.assign({}, state, {
        newEvent,
      })

    case CLEAR_NEW_EVENT_INFO:
      return Object.assign({}, state, {
        newEvent: {}
      })

    case UPDATE_NEW_EVENT_WITH_FB:
      return Object.assign({}, state, {
        newEvent: action.newEventFromFB,
      })

    default:
      return state
  }
}

export default events
