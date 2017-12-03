import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import signUpStyle from '../../../style/auth.css'

class LoginForm extends Component {
  onFail(errorMessage) {
    return(
      <div className="alert alert-danger">
        <strong>Failed Login!</strong> {errorMessage}
      </div>
    )
  }

  render() {
    const { onSubmit, onChange, user, errors } = this.props

    if(user.token) {
      return <Redirect to='/' />
    }

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
              type="password"
              value={user.password}
              onChange={onChange}
              />
              <div className="signUpButton">
                <button>Login</button>
              </div>
              <p>Don't have an account? <Link to='/signup'>Create One</Link></p>

              { errors.failedLogin ? this.onFail(errors.message) : null }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm;
