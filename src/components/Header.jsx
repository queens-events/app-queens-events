import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import headerStyle from '../../style/header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    const { user, error } = props
    this.state = { user, errors }
  }

  componentWillReceiveProps(nextProps) {
    const { user, errors } = nextProps

    this.state = {
      user,
      errors
    }
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
        <Link to='/signup'>
          <div className="navbarLink">
            Sign Up
          </div>
        </Link>
        <Link to='/login'>
          <div className="navbarLink">
            Login
          </div>
        </Link>
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

export default Header