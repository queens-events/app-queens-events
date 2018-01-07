import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import loginStyle from './loginForm.css'

class LoginForm extends Component {
  onFail(errorMessage) {
    return(
      <div className="alert alert-danger">
        <strong>Failed Login!</strong> {errorMessage}
      </div>
    )
  }

  render() {
    const { 
      onSubmit,
      onChange,
      toggleLogin,
      user,
      errors 
    } = this.props

    if(user.token) {
      return <Redirect to='/' />
    }

    return(
      <div className="popupLogin">
        {/* <div "> */}
          <form onSubmit={onSubmit} className="loginContainer">
            <div className="loginHeader">
              <div className="loginHeaderText">
                <p>Login</p>
              </div>
              <div className="loginHeaderExit" onClick={toggleLogin}>
                <p>&times;</p>
              </div>
            </div>
            <div className="loginForm">
              <div className="loginFormContainer">
                <p>Username/Email</p>
                <input
                className="userFormInput"
                name="email"
                value={user.email}
                onChange={onChange}
                />
                <p>Password</p>
                <input
                className="userFormInput"
                name="password"
                type="password"
                value={user.password}
                onChange={onChange}
                />
                <div className="loginButtonContainer">
                  <button className="loginQEButton">Login</button>
                </div>
                <p>Don't have an account? Create One</p>

                { errors.failedLogin ? this.onFail(errors.message) : null }
              </div>
            </div>
          </form>
        {/* </div> */}
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm;
