import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import VenueAdd from './venueAdd/VenueAdd.jsx'
import VenueList from './venueList/VenueList.jsx'
import VenueDetail from './venueDetail/VenueDetail.jsx'

class Venue extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/venues/add">Add Venue</Link></li>
        </ul>
        <Switch>
          <Route exact path='/venues' component={VenueList}/>
          <Route path='/venues/add' component={VenueAdd}/>
        </Switch>
      </div>
    );
  }
}

export default Venue