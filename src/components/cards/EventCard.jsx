import React, { Component } from 'react'
import cardStyle from '../../../style/event.css'

const EventCard = () => {
  let cardImageStyle = {
    backgroundImage: 'url(http://cdn.wallpapersafari.com/89/95/qJQWun.jpg)'
  }

  return(
    <div className="eventCard">
      <div className="eventTopImage">
        <div style={cardImageStyle} />
      </div>
      <div className="bottomInfo">
        <div className="eventInfoLeft">
          <div className="eventTitle">
            <h1>Handsome Black Men</h1>
            <p>123 Venue St, Kingston ON K5T 1S7</p>
          </div>
          <div className="eventOrganization">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/7c/1c/46/7c1c46ef1da2cb53922428cbeae03ebe.jpg" />
            <p>Queen's University People</p>
          </div>
        </div>
        <div className="eventInfoRight">
          <div className="eventDate">
            <h1>12</h1>
            <h3>July</h3>
            <p>7:30PM-8:30 PM</p>
          </div>
          <div className="eventButtons">
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard