import React, { Component } from 'react'
import ProfileEdit from './ProfileEditContainer.jsx'
import EventList from '../event/eventList/EventList.jsx'
import OrganizationList from '../organization/organizationList/OrganizationList.jsx'
import cardStyle from './profile.css'

class ProfilePage extends Component {

  render(){
    return (
      <div className="profileContainer">
        <div className="profileUserInfo">
          <div className="profileUserImage" />
          <h2>FirstName LastName</h2>
          <p>Profile Description</p>
        </div>
        <div className="profileData">
          <ul>
            <li className="profileElement" id="edit" onClick={this.props.toggleProfile}>My Profile</li>
            <li className="profileElement" id="events">My Events</li>
            <li className="profileElement" id="orgs">My Organizations</li>
          </ul>
          {this.props.profileHidden ? <ProfileEdit /> : null}
        </div>
      </div>
    )
  }
}

export default ProfilePage