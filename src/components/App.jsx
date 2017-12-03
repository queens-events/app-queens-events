import React, { Component } from 'react';
import Header from './HeaderContainer.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import appStyle from '../../style/app.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <Header />
        <div className="app">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App