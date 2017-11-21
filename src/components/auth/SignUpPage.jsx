import _ from 'lodash'
import React, { Component } from 'react'
import SignUpForm from './SignUpForm.jsx'
import validator from '../../helpers/validator.js'
import axios from 'axios'

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        id: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        token: '',
        failedSignUp: false,
      }
    };

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.failedSignUp = this.failedSignUp.bind(this)
  }

  async processForm(event) {
    event.preventDefault();
    event.target.reset()
    
    const { email, password, confirm_password } = this.state.user

    const postData = { email, password };

    try {
      if(validator.validateEmail(email)){
        if (password === confirm_password) {
          const loginData = await axios.post('https://stopmissingout.ca/authenticate/signup', postData);
          console.log(loginData);
          
          if (loginData.data.success == true) {
            const token = loginData.data.payload;
            const user = this.state.user;
            user.token = token;
          
            this.setState({user})
          }
        }
        else {
          const user = { 
            id: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            token: '',
            failedSignUp: true,
          }
          
          const errors = this.state.errors
          errors.passwordMismatch = 'Password and confirm password do not match.'
  
          this.setState({errors, user})
        }
      }
      else {
        const errors = this.state.errors
        errors.invalidEmail = 'The email given is invalid (perhaps doesn not include @ or domain name)'

        const user = { 
          id: '',
          email: '',
          username: '',
          password: '',
          confirm_password: '',
          token: '',
          failedSignUp: true,
        }

        this.setState({errors, user})
      }
    } catch(err) {
      console.log('Error thrown', err)
    }
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    console.log(this.state.user);
  }

  failedSignUp() {

   let errorHTML = []
   _.forEach(this.state.errors, (error, key) => {
      errorHTML.push(
        <div key={key} className="alert alert-danger">
          <strong>Failed SignUp!</strong> {error}
        </div>
      )
    })    

    return(
      errorHTML
    )
  }

  render() {
    let responseStyle = {
      height: '600px',
    }

    return(
      this.state.user.token ? 
      <div style={responseStyle}>
        <h1>Sign Up successful! Check your email and verify your account</h1>
      </div> :
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          onFail={this.failedSignUp}
          errors={this.state.errors}
          user={this.state.user}
        />
    );
  }
}

export default SignUpPage;
