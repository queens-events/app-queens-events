import { connect } from 'react-redux'
import {
  TOGGLE_CREATE_EVENT_HIDDEN,
  TOGGLE_PREVIEW_EVENT_HIDDEN
} from '../../../actions/index'
import EventAdd from './EventAdd.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCreateEventForm: () => {
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
    },
  })
}

const EventContainer = connect(mapStateToProps, mapDispatchToProps)(EventAdd)

export default EventContainer
