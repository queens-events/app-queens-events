import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cardStyle from './eventCard.css'
import classNames from 'classnames'

const EventCard = ({id, name, imageUrl, category, venue, date, month, startTime, endTime}) => {
  let cardImageStyle = {
    backgroundImage: `url(${imageUrl})` || 'url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)'
  }

  const categoryColorMap = {
    HEALTH: "blue",
    EDUCATION: "green",
    SPORTS: "red",
    CONCERTS: "purple",
    ARTS_AND_THEATER: "orange",
    SOCIALS: "yellow"
  }

  const categoryStringMap = {
    HEALTH: "HEALTH",
    EDUCATION: "EDUACTION",
    SPORTS: "SPORTS",
    CONCERTS: "CONCERTS",
    ARTS_AND_THEATER: "ARTS AND THEATER",
    SOCIALS: "SOCIALS"
  }

  return(
    <div className="eventCard">
      <div className="eventTopImage">
        <div className="eventBackgroundImage" style={cardImageStyle} />
        <div className={ classNames("eventCategory", categoryColorMap[category] ) }>
          {categoryStringMap[category]}
        </div>
      </div>
      <div className="bottomInfo">
        <div className="eventInfoLeft">
          <div className="eventTitle">
            <h4>{name}</h4>
            <p>{venue}</p>
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
            <h1>{date}</h1>
            <h3>{month}</h3>
            <p>{startTime}-{endTime}</p>
          </div>
          <div className="eventButtons">
            <Link to={`/events/${id}`}>
              <button className="eventCardButton">More Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard