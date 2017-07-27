import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';
import signUpStyle from '../../../style/auth.css'

const LoginForm = ({onSubmit, onChange, errors, user}) => {
// {errors.summary && <p className="error-message">{errors.summary}</p>}
  return(
    <div className="signUpContainer">
      <form onSubmit={onSubmit}>
        <div className="signUpHeader">
          <p>Login</p>
        </div>
        <div className="signUpForm">
          <div className="signUpFormContainer">
            <p>Username/Email</p>
            <input
            name="email"
            value={user.email}
            onChange={onChange}
            />
            <p>Password</p>
            <input
            name="password"
            value={user.password}
            onChange={onChange}
            />
            <div className="signUpButton">
              <button>Login</button>
            </div>
            <p>Don't have an account? <Link to='/signup'>Create One</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm;
