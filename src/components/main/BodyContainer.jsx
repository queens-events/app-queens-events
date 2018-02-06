import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Body from './Body.jsx'

const mapStateToProps = state => {
  return state
}

const BodyContainer = withRouter(connect(mapStateToProps)(Body))

export default BodyContainer
