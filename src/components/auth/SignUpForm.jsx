import React, { Component } from 'react'
import PropTypes from 'prop-types'
import signUpStyle from '../../../style/auth.css'

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
    const { onSubmit, onChange, user, errors } = this.props
    
    let responseStyle = {
      height: '600px',
    }

    if(user.token) {
      return (
        <div style={responseStyle}>
          <h1>Sign up successful! Check your email and verify your account</h1>
        </div>
      )
    }

    return (
      <div className="signUpContainer">
        <form onSubmit={onSubmit}>
          <div className="signUpHeader">
            <p>Sign Up</p>
          </div>
          <div className="signUpForm">
            <div className="signUpFormContainer">
              <p>Username</p>
              <input
                name="username"
                value={user.username}
                onChange={onChange}
                />
              <p>Email</p>
              <input
                name="email"
                value={user.email}
                onChange={onChange}
                />
              <p>Password</p>
              <input
                name="password"
                type="password"
                value={user.password}
                onChange={onChange}
              />
              <p>Confirm Password</p>
              <input
                name="confirm_password"
                type="password"
                value={user.confirm_password}
                onChange={onChange}
              />
              <div className="signUpButton">
                <button>Create Account</button>
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
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm;
