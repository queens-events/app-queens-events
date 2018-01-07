import _ from 'lodash'
import { connect } from 'react-redux'
import {
  loadEvents,
} from '../../../actions/index'

import EventList from './EventList.jsx'

const filterEvents = (events, filters) => {
  let filteredEvents;
  
  if (filters) {
    filteredEvents = filterEventsCategories(events, filters)
    filteredEvents = filterEventsTags(filteredEvents, filters)

    console.log(filteredEvents)
  } 
  else {
    filteredEvents = events
  }
  return filteredEvents
}

const filterEventsCategories = (events, filters) => {
  return _.filter(events, (event) => {
    return filters.categories[event.category]
  })
}

const filterEventsTags = (events, filters) => {
  return _.filter(events, (event) => {
    return !filters.tags[event.tag]
  })
}

const mapStateToProps = (state) => {
  return {
    events: filterEvents(state.events.events, state.events.filters) || {}
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    getEvents: () => {
      dispatch(loadEvents());
    },
  })
}

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventList)

export default EventListContainer
