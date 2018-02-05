import { connect } from 'react-redux'
import {
  loadSingleEvent,
} from '../../../connectors/redux/actions/index'
import EventDetail from './EventDetail.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    getSingleEvent: eventID => {
      dispatch(loadSingleEvent(eventID))
    },
  })
}

const EventDetailContainer = connect(mapStateToProps, mapDispatchToProps)(EventDetail)

export default EventDetailContainer
