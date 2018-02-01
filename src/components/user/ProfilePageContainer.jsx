import { connect } from 'react-redux'
import {
  toggleProfileHidden
} from '../../actions/index'
import ProfilePage from './ProfilePage.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleProfile: () => {
      dispatch(toggleProfileHidden())
    }
  })
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

export default ProfilePageContainer