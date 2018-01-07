import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EventList from '../event/eventList/EventListContainer.jsx'
import VenueList from '../venue/venueList/VenueList.jsx'
import OrganizationList from '../organization/organizationList/OrganizationList.jsx'
import homeStyle from './home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <div className="landingPageBanner">
          <h1>Welcome to Queen's Events!</h1>
          <div className="landingButtons">
            <Link to='/signup'>
              <button className="landingButton">Sign Up</button>
            </Link>
            <Link to='/login'>
              <button className="landingButton">Login</button>
            </Link>
          </div>
        </div>
        <EventList />
      </div>
    );
  }
}

export default Home