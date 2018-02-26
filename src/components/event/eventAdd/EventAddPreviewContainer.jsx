import { connect } from 'react-redux'
import {
  postEvent,
  importFBEvent,
  updateNewEventInfo,
  EVENT_FILE_TO_BE_SENT,
  TOGGLE_PREVIEW_EVENT_HIDDEN,
} from '../../../actions/index'
import EventAddPreview from './EventAddPreviewModal.jsx'

const mapStateToProps = state => {
  return state.events.newEvent
}

const mapDispatchToProps = dispatch => {
  return ({
    togglePreviewEventForm: () => {
      dispatch({ type: TOGGLE_PREVIEW_EVENT_HIDDEN })
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