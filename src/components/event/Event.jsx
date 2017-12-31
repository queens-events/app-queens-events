import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import EventList from './eventList/EventList.jsx'
import EventDetail from './eventDetail/EventDetail.jsx'
import EventAdd from './eventAdd/EventAdd.jsx'
import eventStyle from './event.css'

class Event extends Component {
  render() {
    return (
      <div className="eventContainer">
        <div className="eventFilters">
          <div className="eventFilterList">
            Filter List
          </div>

          <div className="eventFilterCategories">
            Categories
          </div>

          <div className="eventFilterTags">
            Tags
          </div>

          <div className="eventFilterSortBy">
            Sort By
          </div>

          <div className="eventFilterVenue">
            Venue
          </div>

        </div>
        <div className="eventContent">
          <EventList />
        </div>
      </div>
    )
  }

}

export default Event