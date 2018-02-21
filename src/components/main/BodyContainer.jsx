import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { 
    TOGGLE_LOGIN_HIDDEN, 
    TOGGLE_SIGN_UP_HIDDEN 
} from '../../actions/index'
import Body from './Body.jsx'

const mapStateToProps = state => {
  return state
}

const BodyContainer = withRouter(connect(mapStateToProps)(Body))

export default BodyContainer