import React, { Component } from 'react'
import { toggleCreateEventHidden } from '../../../actions'
import { connect } from 'react-redux'
import CreateEventForm from './CreateEventForm.jsx'
import EventAddScheduleForm from './EventAddScheduleForm.jsx'

const mapStateToProps = state => {
  return state.auth
}

const mapDispatchToProps = dispatch => {
  return ({
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()
      dispatch(loadCreateEvent())
    },
    onChange: event => {
      const { name, value } = event.target
      dispatch(updateEventInfo({ name, value }))
    },
    toggleCreateEvent: () => {
      console.log("Fired")
      dispatch(toggleCreateEventHidden())   
    }
  })
}

const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEventForm)

export default CreateEventContainer
