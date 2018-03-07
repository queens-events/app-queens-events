import React, { Component } from 'react'
import PropTypes from 'prop-types'
import signUpStyle from './signUpForm.css'

//const SignUpForm = ({onSubmit, onChange, errors, user}) => {
class SignUpForm extends Component {
  onFail(errorMessage) {
/*  var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show", "");}, 8000); */
    return(
    <div id="snackbar">
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
              <div className="signUpFormText">
              <h4>Username</h4>
            </div>
              <input
                className="userFormInput"
                name="username"
                value={user.username}
                onChange={onChange}
                />
                <div className="signUpFormText">
              <h4>Email</h4>
              </div>
              <input
                className="userFormInput"
                name="email"
                value={user.email}
                onChange={onChange}
                />
                <div className="signUpFormText">
              <h4>Password</h4>
              </div>
              <input
                className="userFormInput"
                name="password"
                type="password"
                value={user.password}
                onChange={onChange}
              />
              <div className="signUpFormText">
              <h4>Confirm Password</h4>
              </div>
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
