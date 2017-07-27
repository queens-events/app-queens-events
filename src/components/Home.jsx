import React, { Component } from 'react'
import EventList from './event/EventList.jsx'
import VenueList from './venue/VenueList.jsx'
import OrganizationList from './organization/OrganizationList.jsx'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Queen's Events!</h1>
        <EventList />
        <OrganizationList />
        <VenueList />
      </div>
    );
  }
}

export default Home