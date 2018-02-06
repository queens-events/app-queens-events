import { connect } from 'react-redux'
import {
  LOG_OFF, 
  toggleLoginHidden,
  toggleSignUpHidden
} from '../../connectors/redux/actions/index'
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
      dispatch(toggleLoginHidden())
    },
    toggleSignUpForm: () => {
      dispatch(toggleSignUpHidden())
    }
  })
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
