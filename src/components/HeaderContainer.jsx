import { connect } from 'react-redux'
import { LOG_OFF, TOGGLE_LOGIN_HIDDEN } from '../actions/index'
import Header from './Header.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onClick: () => {
      dispatch({ type: LOG_OFF });
    },
    toggleLoginForm: () => {
      dispatch({ type: TOGGLE_LOGIN_HIDDEN })
    }
  })
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
