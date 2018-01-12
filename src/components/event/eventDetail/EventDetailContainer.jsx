import { connect } from 'react-redux'
// import {
//   getSingleEvent
// } from '../../../actions/index'
import moment from 'moment'
import EventDetail from './EventDetail.jsx'

const mapStateToProps = (state, ownProps) => {
  let { eventID } = ownProps.match.params
  let event = state.events.events[ownProps.match.params.eventID - 1]

  let startDateTime = moment(event.startTime).add(5, 'hours')
            
  event.date = startDateTime.format('D')
  event.month = startDateTime.format('MMM')
  
  event.startTime = startDateTime.format('LT')
  event.endTime = moment(event.endTime).add(5, 'hours').format('LT')

  event.venue = event.venueString || event.venue
  return event
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
