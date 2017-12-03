import React, { Component } from 'react'
import '../../../style/profileForm.css'

class ProfileEdit extends Component {

  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      public: true,
      bio: '',
      oldPw: '',
      newPw: '',
      pwConfirm: ''
    }
  }

  render() {

    return (

      <form className="profileChangeContainer">

        <div className="leftContainer">

          <h1 className="formTitle">Change Profile Info</h1>

          <div className="formLeftElement">
            <h2>First Name</h2>
            <input value={this.state.firstName} onChange={event => this.setState({ firstName: event.target.value })}/>
          </div>

          <div className="formLeftElement">
            <h2>Last Name</h2>
            <input value={this.state.lastName} onChange={event => this.setState({ lastName: event.target.value })}/>
          </div>

          <div className="formLeftElement">
            <h2>Email</h2>
            <input value={this.state.email} onChange={event => this.setState({ email: event.target.value })}/>
          </div>

          <div className="formLeftElement">
            <h2>Phone</h2>
            <input placeholder="XXX-XXX-XXXX" value={this.state.phoneNumber} onChange={event => this.setState({ phoneNumber: event.target.value })} />
          </div>

          <div className="publicSelector">
            <h2>Public</h2>
            <div className="checkboxItem"><input type="radio" name="q1" value={true} onClick={event => this.setState({ public: event.target.value })}/></div>
            <div className="radioText">Yes</div>
            <div className="checkboxItem"><input type="radio" name="q1" value={false} onClick={event => this.setState({ public: event.target.value })}/></div>
            <div className="radioText">No</div>
          </div>  

          <div className="biography">
            <h2>Bio</h2>
            <textarea rows="5" placeholder="Describe Yourself!" value={this.state.bio} onChange={event => this.setState({ bio: event.target.value })}/>
          </div>

        </div>

        <div className="rightContainer">

          <h1 className="formTitle">Change Password</h1>

          <div className="formRightElement">
            <h2>Old Password</h2>
            <input value={this.state.oldPw} onChange={event => this.setState({ oldPw: event.target.value })} />
          </div>

          <div className="formRightElement">
            <h2>New Password</h2>
            <input value={this.state.newPw} onChange={event => this.setState({ newPw: event.target.value })} />
          </div>

          <div className="formRightElement">
            <h2>Confirm New Password</h2>
            <input value={this.state.pwConfirm} onChange={event => this.setState({ pwConfirm: event.target.value })} />
          </div>

          <div className="updateBtn">
            <button className="landingButton"><h1>Update</h1></button>
          </div>
        </div>

      </form>
    )
  }
}

export default ProfileEdit