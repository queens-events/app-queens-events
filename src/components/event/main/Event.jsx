import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import EventList from '../eventList/EventListContainer.jsx'
import EventFilters from './EventFiltersContainer.jsx'
import EventDetail from '../eventDetail/EventDetail.jsx'
import EventAdd from '../eventAdd/EventAdd.jsx'
import DropDown from '../../DropDown.jsx';
import eventStyle from './event.css'

class Event extends Component {
  render() {
    return (
      <div className="eventContainer">
        <EventFilters />
        <div className="eventContent">
          <EventList />
          <EventAdd />
        </div>
      </div>
    )
  }
}

export default Event