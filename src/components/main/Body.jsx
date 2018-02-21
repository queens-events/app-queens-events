import React, { Component } from 'react'
import Main from './Main.jsx';
import Login from '../auth/login/LoginContainer.jsx'
import SignUp from '../auth/signUp/SignUpContainer.jsx'

class Body extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default Body