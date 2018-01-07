import React, { Component } from 'react'
import PropTypes from 'prop-types'
import signUpStyle from './signUpForm.css'

//const SignUpForm = ({onSubmit, onChange, errors, user}) => {
class SignUpForm extends Component {
  onFail(errorMessage) {
    return(
      <div className="alert alert-danger">
        <strong>Failed Login!</strong> {errorMessage}
      </div>
    )
  }
  
  render(){
    const {
      onSubmit,
      onChange,
      toggleSignUp,
      user,
      errors
    } = this.props

    if(user.token) {
      return (
        <div className="errorResponse">
          <h1>Sign up successful! Check your email and verify your account</h1>
        </div>
      )
    }

    return (
      <div className="popupSignUp">
        <form onSubmit={onSubmit} className="signUpContainer">
          <div className="signUpHeader">
            <div className="signUpHeaderText">
              <p>Sign Up</p>
            </div>
            <div className="signUpHeaderExit" onClick={toggleSignUp}>
              <p>&times;</p>
            </div>
          </div>
          <div className="signUpForm">
            <div className="signUpFormContainer">
              <p>Username</p>
              <input
                className="userFormInput"
                name="username"
                value={user.username}
                onChange={onChange}
                />
              <p>Email</p>
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
              <p>Confirm Password</p>
              <input
                className="userFormInput"
                name="confirm_password"
                type="password"
                value={user.confirm_password}
                onChange={onChange}
              />
              <div className="signUpButtonContainer">
                <button className="signUpQEButton">Create Account</button>
              </div>

              { errors.failedSignUp ? this.onFail(errors.message) : null }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm;
