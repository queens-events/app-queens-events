import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventAddForm from './EventAddForm.jsx'
import EventAddScheduleForm from './EventAddScheduleForm.jsx'

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
      const { name, value } = event.target
      dispatch(updateSignUpInfo({ name, value }))
    },
  })
}

class EventAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: true,
      scheduleHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  toggleSchedule() {
    this.setState({
      scheduleHidden: !this.state.scheduleHidden
    })

  }

  nextForm() {
    this.setState({
      hidden: !this.state.hidden,
      scheduleHidden: !this.state.scheduleHidden
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} className="landingButton">
          Create Event
        </button>
 
        {!this.state.hidden ? <EventAddForm onSubmit={this.nextForm.bind(this)} /> : null}
        {!this.state.scheduleHidden ? <EventAddScheduleForm onSubmit={this.toggleSchedule.bind(this)} /> : null}
      </div> 
    );
  }
}

export default EventAdd