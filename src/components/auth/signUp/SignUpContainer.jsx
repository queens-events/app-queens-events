import { 
  loadSignUp,
  updateSignUpInfo,
  clearSignUpForm,
  toggleSignUpHidden } from '../../../connectors/redux/actions'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()
      dispatch(loadSignUp())
    },
    onChange: event => {
      const {name, value} = event.target
      dispatch(updateSignUpInfo({ name, value }))
    },
    toggleSignUp: () => {
      dispatch(clearSignUpForm())
      dispatch(toggleSignUpHidden())
    }
  })
}

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm)

export default SignUpContainer