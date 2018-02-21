import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import headerStyle from './header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    const { user, errors } = props
    this.state = { user, errors }
  }

  componentWillReceiveProps(nextProps) {
    const { user, errors } = nextProps

    this.setState({
      user,
      errors
    })
  }

  loggedInHeader() {
    return (
      <div className="navbarRightBox">
        <Link to='/' onClick={this.props.onClick}>
          <div className="navbarLink">
            Log Off
          </div>
        </Link>
        <Link to='/profile'>
          <div className="navbarLink">
            Profile
          </div>
        </Link>
      </div>
    )
  }

  loggedOutHeader() {
    return(
      <div className="navbarRightBox">
        <div className="navbarLink" onClick={this.props.toggleSignUpForm}>
          Sign Up
        </div>
        <div className="navbarLink" onClick={this.props.toggleLoginForm}>
          Login
        </div>
      </div>
    )
  }
  render(){
    return(
      <div className="header">
        <div className="navbarLeftBox">
          <Link to='/'>
            <div className="navbarLogo" />
          </Link>
          <div className="navbarLeftLinks">
            <Link to='/events'>
              <div className="navbarLink">
                Events
              </div>
            </Link>

            <Link to='/organizations'>
              <div className="navbarLink">
                Organizations
              </div>
            </Link>

            <Link to='/venues'>
              <div className="navbarLink">
                Venues
              </div>
            </Link>

            <Link to ='/about'>
              <div className="navbarLink">
                About
              </div>
            </Link>
          </div>
        </div>
        { this.state.user.token ? this.loggedInHeader() : this.loggedOutHeader() }
      </div>
    );
  }
}

Header.propTypes = {
  toggleLoginForm: PropTypes.func.isRequired,
  toggleSignUpForm: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Header