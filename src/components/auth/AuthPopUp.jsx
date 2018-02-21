import React, { Component } from 'react'
import Login from './login/LoginContainer.jsx'
import SignUp from './signUp/SignUpContainer.jsx'

class AuthPopUp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.auth.loginHidden ? <Login /> : null }
        {this.props.auth.signUpHidden ? <SignUp /> : null }
      </div>
    );
  }
}

export default AuthPopUp