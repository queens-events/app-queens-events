import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import EventList from '../event/EventList.jsx'
import VenueList from '../venue/VenueList.jsx'
import OrganizationList from '../organization/OrganizationList.jsx'
import cardStyle from '../../../style/profile.css'

class ProfilePage extends Component {
  render(){
    return(
      <div className="profileContainer">
        <div className="profileUserInfo">
          <div className="profileUserImage" />
          <h1>Stephen Peterkins</h1>
          <p>Date joined</p>
        </div>
        <div className="profileData">
          <ul>
            <li><Link to='/profile/my-events'>My Events</Link></li>
            <li><Link to='/profile/my-organizations'>My Organizations</Link></li>
            <li><Link to='/profile/my-venues'>My Venues</Link></li>
          </ul>
          <Switch>
            <Route exact path='/profile/my-events' component={EventList} />
            <Route exact path='/profile/my-organizations' component={OrganizationList} />
            <Route exact path='/profile/my-venues' component={VenueList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProfilePage