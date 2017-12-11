import { connect } from 'react-redux'
import Header from './Header.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onClick: () => {
      dispatch({ type: 'LOG_OFF' });
    }
  })
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
