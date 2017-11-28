import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import EventList from './event/EventList.jsx'
import VenueList from './venue/VenueList.jsx'
import OrganizationList from './organization/OrganizationList.jsx'
import homeStyle from '../../style/home.css'
import EventTrending from './event/EventTrending.jsx'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="landingPageBanner">
          <h1>All the events you want to go to, all in one place!</h1>
          <div className="landingButtons">
            <button className='landingButton'>Find Events</button>
          </div>
          <div className="landingButtons">
            <Link to='/signup'>
              <button className="landingButton">Sign Up</button>
            </Link>
            <Link to='/login'>
              <button className="landingButton">Login</button>
            </Link>
          </div>
        </div>
        <EventTrending />
        <EventList />
        <OrganizationList />
        <VenueList />
      </div>
    );
  }
}

export default Home