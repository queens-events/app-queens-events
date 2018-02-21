import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header/HeaderContainer.jsx'
import Footer from '../components/footer/Footer.jsx'
import Login from '../components/auth/login/LoginContainer.jsx'
import SignUp from '../components/auth/signUp/SignUpContainer.jsx'
import AuthPopUp from '../components/auth/AuthPopUpContainer.jsx'

import appStyle from './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <AuthPopUp />
    <div className="app">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
