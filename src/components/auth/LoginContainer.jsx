import { loadLogin, updateLoginInfo } from '../../actions'
import { connect } from 'react-redux'
import LoginForm from './LoginForm.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()
      dispatch(loadLogin())
    },
    onChange: event => {
      const {name, value} = event.target
      dispatch(updateLoginInfo({ name, value }))
    },
  })
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)

export default LoginContainer