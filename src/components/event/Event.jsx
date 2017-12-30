import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import EventList from './eventList/EventList.jsx'
import EventDetail from './eventDetail/EventDetail.jsx'
import EventAdd from './eventAdd/EventAdd.jsx'
import eventStyle from './event.css'

class Event extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="landingButtons">
            <EventAdd />
          </div>
        </div>

        <Switch>
          <Route exact path='/events' component={EventList} />
        </Switch>
      </div>
    )
  }

}

export default Event