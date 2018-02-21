import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/Home.jsx'
import Event from '../event/main/EventMain.jsx'
import EventDetail from '../event/eventDetail/EventDetailContainer.jsx'
import Venue from '../venue/Venue.jsx'
import ProfilePage from '../user/ProfilePage.jsx'
import Organization from '../organization/Organization.jsx'

const About = () => {
  return (
    <h1>THIS IS THE ABOUT PAGE</h1>
  );
}

const Main = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/organizations' component={Organization} />
      <Route path='/venues' component={Venue} />
      <Route path='/profile' component={ProfilePage} />
      <Route exact path='/events' component={Event} />
      <Route path='/events/:eventID' component={EventDetail} />
    </Switch>
  )
}

export default Main