import React, { PropTypes } from 'react'
import signUpStyle from '../../../style/auth.css'

const SignUpForm = ({onSubmit, onChange, errors, users}) => {
  return (
    <div className="signUpContainer">
      <div className="signUpHeader">
        <p>Sign Up</p>
      </div>
      <div className="signUpForm">
        <div className="signUpFormContainer">
          <p>Username</p>
          <input
            name="username"
            onChange={onChange}
            onSubmit={onSubmit}
            />
          <p>Email</p>
          <input
            name="email"
            onChange={onChange}
            onSubmit={onSubmit}
            />
          <p>Password</p>
          <input
            name="password"
            onChange={onChange}
            onSubmit={onSubmit}
          />
          <p>Confirm Password</p>
          <input
            name="confirm_password"
            onChange={onChange}
            onSubmit={onSubmit}
          />
          <div className="signUpButton">
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm;
