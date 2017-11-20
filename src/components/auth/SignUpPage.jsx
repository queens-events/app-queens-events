import React, { Component } from 'react'
import SignUpForm from './SignUpForm.jsx'
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
    console.log(postData)
    try {
      if (password === confirm_password) {
        console.log('We make it here')
        const loginData = await axios.post('https://stopmissingout.ca/authenticate/signup', postData);
        console.log(loginData);
        
        if (loginData.data.success == true) {
          const token = loginData.data.payload;
          const user = this.state.user;
          user.token = token;
        }

        this.setState({resetUser})
      }
      else {
        console.log('here??')
        const user = { 
          id: '',
          email: '',
          username: '',
          password: '',
          confirm_password: '',
          token: '',
          failedSignUp: true,
        }

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

    this.setState({
      user
    });

    console.log(this.state.user);
  }

  failedSignUp() {
    return(
      <div className="alert alert-danger">
        <strong>Failed SignUp!</strong> Password and confirm password do not match.
      </div>
    )
  }

  render() {
    return(
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
