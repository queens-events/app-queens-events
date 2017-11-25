import React, { Component } from 'react'
import LoginForm from './LoginForm.jsx'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        token: '',
        failedLogin: false,
      }
    };

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.failedLogin = this.failedLogin.bind(this)
  }

  async processForm(event) {
    event.preventDefault();
    event.target.reset()

    let postData = { email: this.state.user.email, password: this.state.user.password };

    try {
      const loginData = await axios.post('https://stopmissingout.ca/authenticate', postData);

      if (loginData.data.success == true) {
        const token = loginData.data.payload;
        const user = this.state.user;
        user['token'] = token;
  
        this.setState({user})
      }
      else {
        const user = { email: '', password: '', failedLogin: true }
        this.setState({user})
      }
    } catch(err) {
      console.log('Error thrown', err)
    }
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user})
  }

  failedLogin(){
    return(
      <div className="alert alert-danger">
        <strong>Failed Login!</strong> The username or password given is incorrect.
      </div>
    )
  }

  render(){
    if(this.state.user.token) {
      return <Redirect to='/' />
    }

    return(
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        onFail={this.failedLogin}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}

export default LoginPage;