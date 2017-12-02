import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ProfileEdit from './ProfileEdit.jsx'
import EventList from '../event/EventList.jsx'
import OrganizationList from '../organization/OrganizationList.jsx'
import cardStyle from '../../../style/profile.css'

class ProfilePage extends Component {

  changeColor(e) {

    e.target.style="background-color: grey;"
  }

  render(){
    return (
      <div className="profileContainer">
        <div className="profileUserInfo">
          <div className="profileUserImage" />
          <h1>Name</h1>
          <p>Profile Description </p>
        </div>
        <div className="profileData">
          <ul>
            <li><Link to='/profile/edit-profile' className="profileElement" onClick={this.changeColor}>My Profile</Link></li>
            <li><Link to='/profile/my-events' className="profileElement" onClick={this.changeColor}>My Events</Link></li>
            <li><Link to='/profile/my-organizations' className="profileElement" onClick={this.changeColor}>My Organizations</Link></li>
          </ul>

          <Switch>
            <Route exact path='/profile/my-events' component={EventList} />
            <Route exact path='/profile/my-organizations' component={OrganizationList} />
            <Route exact path='/profile/edit-profile' component={ProfileEdit} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProfilePage