import React, { Component } from 'react'
import Header from './header/HeaderContainer.jsx'
import Footer from './footer/Footer.jsx'
import Body from './main/BodyContainer.jsx'
import appStyle from '../../style/app.css'

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="app">
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App