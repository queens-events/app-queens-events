import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  TOGGLE_CREATE_EVENT_HIDDEN,
  toggleCreateEventHidden
} from '../../actions/index'
import Event from './Event.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCreateEventForm: () => {
      dispatch(toggleCreateEventHidden())
    }
  })
}

const EventContainer = connect(mapStateToProps, mapDispatchToProps)(Event)

export default EventContainer