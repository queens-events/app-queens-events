import React,{Component} from 'react'
import EventCard from '../cards/EventCard.jsx'
import eventListStyle from '../../../style/eventList.css'

const EventList = () => {
  return(
    <div className="eventListContainer">
      <h1>EventList</h1>
      <div className="eventList">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventList