import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import EventList from '../components/event/eventList/EventListContainer.jsx'
import EventFilters from '../components/event/eventFilters/EventFiltersContainer.jsx'
import EventDetail from '../components/event/eventDetail/EventDetail.jsx'
import EventAdd from '../components/event/eventAdd/EventAdd.jsx'
import eventStyle from '../components/event/main/event.css'

class Event extends Component {
  render() {
    return (
    //   <div>    
    //     <Route
    //       render={({ location }) => (
    //       <div>
    //       <Route exact path="/events"
    //         render={() => 
    //           <div className="eventContainer">
    //             <EventFilters />
    //             <div className="eventContent">
    //               <EventList />
    //             </div>
    //           </div>
    //         }
    //       />
    //       </div>
    //     )}
    //   />
    // </div>
      <div className="eventContainer">
        <EventFilters />
        <div className="eventContent">
          <EventList />
        </div>
      </div>
    )
  }
}

export default Event