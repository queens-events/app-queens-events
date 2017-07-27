import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import OrganizationAdd from './OrganizationAdd.jsx'
import OrganizationList from './OrganizationList.jsx'
import OrganizationDetail from './OrganizationDetail.jsx'

class Organization extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/organizations/add">Add Organization</Link></li>
        </ul>
        <Switch>
          <Route exact path='/organizations' component={OrganizationList}/>
          <Route path='/organizations/add' component={OrganizationAdd}/>
        </Switch>
      </div>
    );
  }
}

export default Organization