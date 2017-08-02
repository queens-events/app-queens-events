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
        <p>A brief description of Queens Events goes here.
        We can see how large it gets before it becomes a problem</p>
      </div>
    </div>
  );
}

export default OrganizationCard;