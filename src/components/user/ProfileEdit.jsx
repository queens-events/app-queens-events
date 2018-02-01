import React, { Component } from 'react'
import './profileForm.css'

class ProfileEdit extends Component {

  render() {
    let { onSubmit, onChange, user, errors } = this.props

    return (

      <form className="profileChangeContainer" onSubmit={onSubmit}>

        <div className="leftContainer">

          <h1 className="formTitle">Change Profile Info</h1>

          <div className="formLeftElement">
            <h2>First Name</h2>
            <input name="firstName" value={user.firstName} onChange={onChange} />
            {console.log(user.firstName)}
          </div>

          <div className="formLeftElement">
            <h2>Last Name</h2>
            <input name="lastName" value={user.lastName} onChange={onChange} />
          </div>

          <div className="formLeftElement">
            <h2>Email</h2>
            <input name="email" value={user.email} onChange={onChange} />
          </div>

          <div className="formLeftElement">
            <h2>Phone</h2>
            <input name="phoneNumber" placeholder="XXX-XXX-XXXX" value={user.phoneNumber} onChange={onChange} />
          </div>

          <div className="publicSelector">
            <h2>Public</h2>
            <div className="checkboxItem"><input type="radio" name="q1" value={user.public} onClick={onChange} /></div>
            <div className="radioText">Yes</div>
            <div className="checkboxItem"><input type="radio" name="q1" value={user.public} onClick={onChange} /></div>
            <div className="radioText">No</div>
          </div>  

          <div className="biography">
            <h2>Bio</h2>
            <textarea name="biography" rows="5" placeholder="Describe Yourself!" value={user.bio} onChange={onChange} />
          </div>

        </div>

        <div className="rightContainer">

          <h1 className="formTitle">Change Password</h1>

          <div className="formRightElement">
            <h2>Old Password</h2>
            <input name="old_password" value={user.old_password} onChange={onchange} />
          </div>

          <div className="formRightElement">
            <h2>New Password</h2>
            <input name="new_password" value={user.password} onChange={onChange} />
          </div>

          <div className="formRightElement">
            <h2>Confirm New Password</h2>
            <input name="confirm_password" value={user.confirm_password} onChange={onChange} />
          </div>

          <div className="updateBtn">
            <button className="landingButton"><h1>Update Info</h1></button>
          </div>
        </div>

      </form>
    )
  }
}

export default ProfileEdit