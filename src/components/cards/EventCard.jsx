import React, { Component } from 'react'
import cardStyle from '../../../style/event.css'

const EventCard = () => {
  let cardImageStyle = {
    backgroundImage: 'url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)'
  }

  return(
    <div className="eventCard">
      <div className="eventTopImage">
        <div style={cardImageStyle} />
      </div>
      <div className="bottomInfo">
        <div className="eventInfoLeft">
          <div className="eventTitle">
            <h1>Super Fun Event</h1>
            <p>123 Venue St, Kingston</p>
            <p>ON K5T 1S7</p>
          </div>
          <div className="eventOrganization">
            <div className="orgLogo">
              <img src="http://queensevents.ca/wp-content/uploads/cropped-QE-Logo-colour-270x270.png" />
            </div>
            <div className="orgTitle">
              <p>Queen's Events</p>
            </div>
          </div>
        </div>
        <div className="eventInfoRight">
          <div className="eventDate">
            <h1>12</h1>
            <h3>July</h3>
            <p>7:30PM-8:30 PM</p>
          </div>
          <div className="eventButtons">
            <button className="eventCardButton">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard