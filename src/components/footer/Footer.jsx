import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './footer.css'

const Footer = () => {
  return (
    <div className="landingPageFooter">
      <div className="landingPageFooterText">
        <div>
          <ul className="landingPageFooterTextList">
            <li>© 2018 Queens Events</li>
            <li><a href="https://www.facebook.com/QueensEvents/">Facebook</a></li>
            <li><a href="https://www.instagram.com/queensevents/">Instagram</a></li>
            <li><a href="https://twitter.com/eventsqueens">Twitter</a></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

export default Footer