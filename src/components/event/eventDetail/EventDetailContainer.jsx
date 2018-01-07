import { connect } from 'react-redux'
// import {
//   getSingleEvent
// } from '../../../actions/index'
import EventDetail from './EventDetail.jsx'

const mapStateToProps = (state, ownProps) => {
  let { eventID } = ownProps.match.params
  // // console.log(state.events)
  // console.log(state.events.events[eventID - 1])
  return state.events.events[ownProps.match.params.eventID - 1]
}

const mapDispatchToProps = dispatch => {
  return ({
    getEventData: () => {
      return null;
    }
  })
}

const EventDetailContainer = connect(mapStateToProps, mapDispatchToProps)(EventDetail)

export default EventDetailContainer
