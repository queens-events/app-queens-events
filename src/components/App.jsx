import React, { Component } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import appStyle from '../../style/app.css';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="app">
          <Main />
        </div>

        <div className="landingPageFooter">
          <div className="landingPageFooterText">
            <div>
              <ul className="landingPageFooterTextList">
                <li>© 2017 Queens Events</li>
                <li><a href="https://www.facebook.com/QueensEvents/">Facebook</a></li>
                <li><a href="https://www.instagram.com/queensevents/">Instagram</a></li>
                <li><a href="https://twitter.com/eventsqueens">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App