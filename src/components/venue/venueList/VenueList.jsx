import React from 'react';
import VenueCard from '../card/VenueCard.jsx';
import venueListStyle from './venueList.css'

const VenueList = () => {
  return(
    <div className="venueListContainer">
      <h1>Venues</h1>
      <div className="venueList">
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>
    </div>
  );
}

export default VenueList