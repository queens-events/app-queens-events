import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { 
    TOGGLE_LOGIN_HIDDEN, 
    TOGGLE_SIGN_UP_HIDDEN 
} from '../../connectors/redux/actions/index'
import AuthPopUp from './AuthPopUp.jsx'

const mapStateToProps = state => {
  return state
}

const AuthPopUpContainer = withRouter(connect(mapStateToProps)(AuthPopUp))

export default AuthPopUpContainer