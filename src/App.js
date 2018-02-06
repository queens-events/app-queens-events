import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
//
import { Provider } from 'react-redux'
import store from './connectors/redux'

import Header from './components/header/HeaderContainer.jsx'
import AuthPopUp from './components/auth/AuthPopUpContainer.jsx'
import Footer from './components/footer/Footer.jsx'

import './app.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <AuthPopUp />
        <div className="app">
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
)
