import React from 'react'
import {Link} from 'react-router-dom'
import headerStly from '../../style/header.css'

const Header = () => {
  return(
    <div className="navbar">
      <div className="navbarLeftBox">
        <div className="navbarLogo" />
        <div className="navbarLeftLinks">
          <div className="navbarLink">
            <Link to='/'>Home</Link><span className="sr-only">(current)</span>
          </div>
          <div className="navbarLink">
            <Link to ='/about'>About</Link>
          </div>
          <div className="navbarLink">
            <Link to='/events'>Events</Link>
          </div>
          <div className="navbarLink">
            <Link to='/organizations'>Organizations</Link>
          </div>
          <div className="navbarLink">
            <Link to='/venues'>Venues</Link>
          </div>
        </div>
      </div>
      <div className="navbarRightBox">
        <div className="navbarLink">
          <Link to='/signup'>Sign Up</Link>
        </div>
        <div className="navbarLink">
          <Link to='/login'>Login</Link>
        </div>
        <div className="navbarLink">
          <Link to='/profile'>Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Header