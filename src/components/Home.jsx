import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EventList from './event/EventList.jsx'
import VenueList from './venue/VenueList.jsx'
import OrganizationList from './organization/OrganizationList.jsx'
import homeStyle from '../../style/home.css'

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
        <OrganizationList />
        <VenueList />
      </div>
    );
  }
}

export default Home