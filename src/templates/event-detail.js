import * as PropTypes from 'prop-types'
import React from 'react'
import eventFormater from '../helpers/event-formater.js'
import EventDetail from '../components/event/eventDetail/EventDetailContainer.jsx'

class EventDetailTemplate extends React.Component {
  render() {
    const event = eventFormater.dateFormat(this.props.pathContext)
    return <EventDetail event={event} eventID={this.props.pathContext.id} />
  }
}

export default EventDetailTemplate
