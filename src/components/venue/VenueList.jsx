import React from 'react';
import VenueCard from '../cards/VenueCard.jsx';
import venueListStyle from '../../../style/venueList.css'

const VenueList = () => {
  return(
    <div className="venueListContainer">
      <h1>Venue List</h1>
      <div className="venueList">
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>
    </div>
  );
}

export default VenueList