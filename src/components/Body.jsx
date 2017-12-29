import React, { Component } from 'react'
import Main from './Main.jsx';
import Login from './auth/LoginContainer.jsx'
import SignUp from './auth/SignUpContainer.jsx'

class Body extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Main />
        {this.props.auth.loginHidden ? <Login /> : null }
        {this.props.auth.signUpHidden ? <SignUp /> : null }
      </div>
    );
  }
}

export default Body