import React,{Component} from 'react'
import EventCard from '../cards/EventCard.jsx'
import eventListStyle from '../../../style/eventList.css'

// TODO, create table and calendar to show information
const EventTrending = () => {
  return(
    <div className="eventListContainer">
      <h1>Trending Events</h1>
        <div className="eventListScroller">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
    </div>
  );
}

export default EventTrending