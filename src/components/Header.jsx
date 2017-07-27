import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/">Queens Events</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><Link to='/'>Home</Link><span className="sr-only">(current)</span></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/organizations'>Organizations</Link></li>
                <li><Link to='/venues'>Venues</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header