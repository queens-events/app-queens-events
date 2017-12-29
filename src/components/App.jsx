import React, { Component } from 'react'
import Header from './HeaderContainer.jsx'
import Footer from './Footer.jsx'
import Body from './BodyContainer.jsx'
import appStyle from '../../style/app.css'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

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