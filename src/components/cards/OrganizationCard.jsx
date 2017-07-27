import React, { Component } from 'react'
import cardStyle from '../../../style/organization.css'

const OrganizationCard = () => {
  let cardImageStyle = {
    backgroundImage: 'url(http://queensevents.ca/wp-content/uploads/Facebook-Header.png)'
  }

  return(
    <div className="organizationCard">
      <div className="orgTopImage">
        <div style={cardImageStyle} />
      </div>
      <div className="orgBottomData">
        <h1>Queens Events</h1>
      </div>
    </div>
  );
}

export default OrganizationCard;