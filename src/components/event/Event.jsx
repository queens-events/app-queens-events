import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import EventList from './EventList.jsx'
import EventDetail from './EventDetail.jsx'
import EventAdd from './EventAdd.jsx'

const Event = () => {
  return(
    <div>
    <ul>
      <li><Link to="/events/add">Add Event</Link></li>
    </ul>
    <Switch>
      <Route exact path='/events' component={EventList}/>
      <Route path='/events/add' component={EventAdd}/>
      <Route path='/events/:eventID' component={EventDetail}/>
    </Switch>
    </div>
  );
}

export default Event