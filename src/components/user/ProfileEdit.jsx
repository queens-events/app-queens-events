import React, { Component } from 'react'
import '../../../style/profileForm.css'

class ProfileEdit extends Component {

  render() {

    return (

      <form className="profileChangeContainer">

        <div className="leftContainer">
          
          <h1 className="formTitle">Change Profile Info</h1>

          <div className="formElement" id="firstName">
            <h2>First Name</h2>
            <input />
          </div>

          <div className="formElement" id="lastName">
            <h2>Last Name</h2>
            <input />
          </div>

          <div className="formElement" id="email">
            <h2>Email</h2>
            <input />
          </div>

          <div className="formElement" id="phoneNumber">
            <h2>Phone</h2>
            <input placeholder="XXX-XXX-XXXX" />
          </div>

        </div>

        <div className="rightContainer">
          Change Password
        </div>
      </form>
    )
  }
}

export default ProfileEdit