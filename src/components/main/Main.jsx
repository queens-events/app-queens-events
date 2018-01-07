import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/Home.jsx'
import Event from '../event/Event.jsx'
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
      <Route path='/events' component={Event} />
      <Route path='/organizations' component={Organization} />
      <Route path='/venues' component={Venue} />
      <Route path='/profile' component={ProfilePage} />
    </Switch>
  );
}

export default Main