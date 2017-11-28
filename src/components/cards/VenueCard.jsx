import React, { Component } from 'react'
import cardStyle from '../../../style/venue.css'

const VenueCard = () => {
  let cardImageStyle = {
    backgroundImage: 'url(http://www.queensu.ca/encyclopedia/sites/webpublish.queensu.ca.qencwww/files/images/s/staufferlibrary/b-stauff.jpg)'
  }

  return(
    <div className="venueCard">
      <div className="venueTopImage">
        <div style={cardImageStyle} />
      </div>
      <div className="venueBottomData">
        <div className="venueLeftData">
        <h1>Stauffer Hall</h1>
        <p>123 Venue St, Kingston ON K5T 1S7</p>
          <div className="venueButton">
              <button className="venueCardButton">More Info</button>
          </div>
        </div>
        <div className="venueRightData">
        add map here
        </div>
      </div>
    </div>
  );
}

export default VenueCard;