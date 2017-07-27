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
        <h1>Stauffer Hall</h1>
      </div>
    </div>
  );
}

export default VenueCard;