import React, { Component } from 'react'
import '../../../style/profileForm.css'

class ProfileEdit extends Component {

  render() {

    return (

      <form className="profileChangeContainer">

        <div className="leftContainer">

          <h1 className="formTitle">Change Profile Info</h1>

          <div className="formLeftElement">
            <h2>First Name</h2>
            <input />
          </div>

          <div className="formLeftElement">
            <h2>Last Name</h2>
            <input />
          </div>

          <div className="formLeftElement">
            <h2>Email</h2>
            <input />
          </div>

          <div className="formLeftElement">
            <h2>Phone</h2>
            <input placeholder="XXX-XXX-XXXX" />
          </div>

          <div className="publicSelector">
            <h2>Public</h2>
            <div className="checkboxItem"><input type="radio" name="q1" value="y" /></div>
            <div className="radioText">Yes</div>
            <div className="checkboxItem"><input type="radio" name="q1" value="n" /></div>
            <div className="radioText">No</div>
          </div>  

          <div className="biography">
            <h2>Bio</h2>
            <textarea rows="5" placeholder="Describe Yourself!" />
          </div>

        </div>

        <div className="rightContainer">

          <h1 className="formTitle">Change Password</h1>

          <div className="formRightElement">
            <h2>Old Password</h2>
            <input />
          </div>

          <div className="formRightElement">
            <h2>New Password</h2>
            <input />
          </div>

          <div className="formRightElement">
            <h2>Confirm New Password</h2>
            <input />
          </div>
          
        </div>


      </form>
    )
  }
}

export default ProfileEdit