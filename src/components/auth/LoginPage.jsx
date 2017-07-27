import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import api from '../../http/api.js';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        id: '',
        email: '',
        password: '',
        isAuth: false,
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
    api.post('/authLogin', postData)
      .then(resp => {
        console.log(resp.data);
        if (resp.data.success == true) {
          let { id, email, password } = resp.data.payload;
          let user = { id, email, password, isAuth: true}

          console.log('Logged in!')
          this.setState({
            user
          })
          console.log(this.state);
        }
      })
      .catch((err) => console.log(err))

    console.log('email:', this.state.user.email);
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


  render(){
    if(this.state.user.isAuth) {
      return <Redirect to='/' />
    }

    return(
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default LoginPage;