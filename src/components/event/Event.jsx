import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import EventList from './eventList/EventList.jsx'
import EventDetail from './eventDetail/EventDetail.jsx'
import EventAdd from './eventAdd/EventAdd.jsx'
import CreateEvent from './eventAdd/CreateEventContainer.jsx'

class Event extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <div className="landingButton" onClick={this.props.toggleCreateEventForm}>Create Event</div>


        <Switch>
          <Route exact path='/events' component={EventList} />
        </Switch>
      </div>
    )
  }

}

Event.propTypes = {
  toggleCreateEventForm: PropTypes.func.isRequired
}

export default Event