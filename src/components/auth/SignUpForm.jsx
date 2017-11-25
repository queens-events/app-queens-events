import React, { PropTypes } from 'react'
import signUpStyle from '../../../style/auth.css'

const SignUpForm = ({onSubmit, onChange, onFail, errors, user}) => {
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

            { user.failedSignUp ? onFail() : null }
          </div>
        </div>
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm;
