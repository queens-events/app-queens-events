import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ProfileEdit from './ProfileEdit.jsx'
import EventList from '../event/eventList/EventList.jsx'
import OrganizationList from '../organization/organizationList/OrganizationList.jsx'
import cardStyle from './profile.css'

class ProfilePage extends Component {

  constructor() {
    super()

    this.state = {
      editProfilecolored: 'white',
      myEventscolored: 'white',
      myOrganizationscolored: 'white'
    }

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(e) {

    switch (e.target.id) {
      case "edit":
        this.setState({
          editProfilecolored: 'grey',
          myEventscolored: 'white',
          myOrganizationscolored: 'white'
        })
        break;

      case "events":
        this.setState({
          editProfilecolored: 'white',
          myEventscolored: 'grey',
          myOrganizationscolored: 'white'
        })
        break;

      case "orgs":
        this.setState({
          editProfilecolored: 'white',
          myEventscolored: 'white',
          myOrganizationscolored: 'grey'
        })
        break;

      default:
        this.setState({
          editProfilecolored: 'white',
          myEventscolored: 'white',
          myOrganizationscolored: 'white'
        })
    
    }
  }

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
            <li><Link to='/profile/edit-profile' className="profileElement" id="edit" style={{ backgroundColor: this.state.editProfilecolored }} onClick={this.changeColor.bind(this)}>My Profile</Link></li>
            <li><Link to='/profile/my-events' className="profileElement" id="events" style={{ backgroundColor: this.state.myEventscolored }} onClick={this.changeColor.bind(this)}>My Events</Link></li>
            <li><Link to='/profile/my-organizations' className="profileElement" id="orgs" style={{ backgroundColor: this.state.myOrganizationscolored }} onClick={this.changeColor.bind(this) }>My Organizations</Link></li>
          </ul>

          <Switch>
            <Route exact path='/profile/my-events' component={EventList} />
            <Route exact path='/profile/my-organizations' component={OrganizationList} />
            <Route exact path='/profile/edit-profile' component={ProfileEdit} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default ProfilePage