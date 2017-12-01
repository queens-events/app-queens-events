import React, { Component } from 'react'
import SignUpForm from './SignUpForm.jsx'

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
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    event.target.reset()

    let postData = { email: this.state.user.email, password: this.state.user.password };

    console.log('email:', this.state.user.email);
    console.log('username:', this.state.user.username);
    console.log('password:', this.state.user.password);
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

  render() {
    return(
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUpPage;
