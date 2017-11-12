import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import EventList from './EventList.jsx'
import EventDetail from './EventDetail.jsx'
import EventAdd from './EventAdd.jsx'
import eventStyle from '../../../style/event.css'

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