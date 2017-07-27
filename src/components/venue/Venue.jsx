import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import VenueAdd from './VenueAdd.jsx'
import VenueList from './VenueList.jsx'
import VenueDetail from './VenueDetail.jsx'

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