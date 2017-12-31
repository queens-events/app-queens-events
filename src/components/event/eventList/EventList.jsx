import React,{ Component } from 'react'
import EventCard from '../card/EventCard.jsx'
import eventListStyle from './eventList.css'

// TODO, create table and calendar to show information
const EventList = () => {
  return(
    <div className="eventListContainer">
      <div className="eventList">
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

export default EventList