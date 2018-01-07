import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import EventMain from './EventMain.jsx'
import EventDetail from '../eventDetail/EventDetail.jsx'

class Event extends Component {
  render() {
    return (
      <Switch>
        <Route path='/events' component={EventMain} />
        <Route path='/events/:eventId' component={EventDetail} />
        <Route path='/events/something' render={() => <div>Something</div>} />
      </Switch>
    )
  }
}

export default Event