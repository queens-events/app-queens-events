import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import EventList from './EventList.jsx'
import EventDetail from './EventDetail.jsx'
import EventAdd from './EventAdd.jsx'
import eventStyle from '../../../style/event.css'

const Event = () => {


  return(
    <div>
        <div>
              <div className="landingButtons">
                  <Link to='/events/add'><button className="landingButton">Create an Event</button></Link>
                  <Link to='/events/add'><button className="landingButton">Import From Facebook</button></Link>
            </div>
        </div>

    <Switch>
        <Route exact path='/events' component={EventList}/>
        <Route path='/events/add' component={EventAdd}/>
    </Switch>
    </div>
  );
}

export default Event