import React from 'react'
import {Link} from 'react-router-dom'
import headerStyle from '../../style/header.css'

const Header = () => {
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

        <Link to='/profile'>
          <div className="navbarLink">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header