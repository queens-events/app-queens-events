import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import EventList from './EventList.jsx'
import EventDetail from './EventDetail.jsx'
import EventAdd from './EventAdd.jsx'
import eventStyle from '../../../style/event.css'

const Event = () => {
  return(
    <div>
    <div className="eventPageBanner">
        <h1>Ready to get started?</h1>
        <h1>Add an Event</h1>
        <div className="landingButtons">
          <Link to='/events/add'><button className="landingButton">Add Event</button></Link>
          <Link to='/events/detail'><button className="landingButton">Event Detail</button></Link>
        </div>
      </div>
    <Switch>
      <Route exact path='/events' component={EventList}/>
      <Route path='/events/add' component={EventAdd}/>
      <Route path='/events/:eventID' component={EventDetail}/>
      <Route path='/events/detail' component={EventDetail}/>
    </Switch>
    </div>
  );
}

export default Event