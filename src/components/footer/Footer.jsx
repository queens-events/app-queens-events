import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './footer.css'
import Fafacebook from 'react-icons/lib/fa/facebook';
import FaInsta from 'react-icons/lib/fa/instagram';
import FaTwit from 'react-icons/lib/fa/twitter';



const Footer = () => {
  return (
    <div className="landingPageFooter">
      <div className="landingPageFooterText">
        <div>
          <ul className="landingPageFooterTextList">
            <li>© 2018 Queens Events</li>
            <li><a href="https://www.facebook.com/QueensEvents/"> <Fafacebook /> </a></li>
            <li><a href="https://www.instagram.com/queensevents/"><FaInsta /> </a></li>
            <li><a href="https://twitter.com/eventsqueens"><FaTwit /></a></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

export default Footer