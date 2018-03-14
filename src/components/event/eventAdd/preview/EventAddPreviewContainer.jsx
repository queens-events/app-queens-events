import { connect } from 'react-redux'
import {
  postEvent,
  importFBEvent,
  updateNewEventInfo,
  EVENT_FILE_TO_BE_SENT,
  TOGGLE_PREVIEW_EVENT_HIDDEN,
  TOGGLE_CREATE_EVENT_HIDDEN,
  CLEAR_NEW_EVENT_INFO,
} from '../../../../actions/index'
import EventAddPreview from './EventAddPreviewModal.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    togglePreviewEventForm: () => {
      dispatch({ type: TOGGLE_PREVIEW_EVENT_HIDDEN })
      dispatch({ type: CLEAR_NEW_EVENT_INFO })
    },
    toggleCreateEventForm: () => {
      dispatch({ type: TOGGLE_PREVIEW_EVENT_HIDDEN })
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
    },
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()

      dispatch(postEvent())
    },
  })
}

const EventAddPreviewContainer = connect(mapStateToProps, mapDispatchToProps)(EventAddPreview)

export default EventAddPreviewContainer