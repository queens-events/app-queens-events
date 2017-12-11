import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Event from './event/Event.jsx'
import Venue from './venue/Venue.jsx'
import Login from './auth/LoginContainer.jsx'
import SignUp from './auth/SignUpContainer.jsx'
import ProfilePage from './user/ProfilePage.jsx'
import Organization from './organization/Organization.jsx'

const Main = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/events' component={Event} />
      <Route path='/organizations' component={Organization} />
      <Route path='/venues' component={Venue} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/profile' component={ProfilePage} />
    </Switch>
  );
}

export default Main