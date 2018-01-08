import React, { Component } from 'react'
import Main from './Main.jsx';
import Login from '../auth/login/LoginContainer.jsx'
import SignUp from '../auth/signUp/SignUpContainer.jsx'
import CreateEventContainer from '../event/eventAdd/CreateEventContainer.jsx'

class Body extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Main />
        {this.props.auth.loginHidden ? <Login /> : null }
        {this.props.auth.signUpHidden ? <SignUp /> : null}
        {!this.props.events.createEventHidden ? <CreateEventContainer /> : null}
      </div>
    );
  }
}

export default Body