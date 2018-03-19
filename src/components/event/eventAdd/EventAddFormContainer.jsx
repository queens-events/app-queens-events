import { connect } from 'react-redux'
import {
  postEvent,
  importFBEvent,
  updateNewEventInfo,
  EVENT_FILE_TO_BE_SENT,
  TOGGLE_CREATE_EVENT_HIDDEN,
  TOGGLE_PREVIEW_EVENT_HIDDEN,
} from '../../../actions/index'
import EventAddForm from './EventAddForm.jsx'

let formValid = false
let fieldValidateErrors = { title: 'Please give your event a name', description: 'Please give your form a description', cost: 'Please give a numeric cost'}
let titleValid, descriptionValid, costValid = false

const validateField = (fieldName, value) => {

  switch (fieldName) {
    case 'title':
      titleValid = value.length > 0 //&& Check if title is already taken would go here
      fieldValidateErrors.title = titleValid ? '' : 'Please give your event a name'
      break;

    case 'description':
      descriptionValid = value.length > 0
      fieldValidateErrors.description = descriptionValid ? '' : 'Please give your event a description'
      break;

    case 'cost':
      costValid = value.length > 0 && !isNaN(value)
      fieldValidateErrors.cost = costValid ? '' : 'Please give a numeric cost'
      break;
  }

  formValid = titleValid && descriptionValid && costValid
  
}


const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCreateEventForm: () => {
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
    },
    togglePreviewEventForm: () => {
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
      dispatch({ type: TOGGLE_PREVIEW_EVENT_HIDDEN })
    },
    onSubmit: event => {
      event.preventDefault()
      event.target.reset()
      console.log("Event Attempted to be posted!")
      if (!formValid) {
        const errorMessage = 'Error(s): \n' + fieldValidateErrors.title + '\n' + fieldValidateErrors.description + '\n' + fieldValidateErrors.cost
        alert(errorMessage)
      }
      else {
        dispatch(postEvent())
        dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
      }
    },
    onChange: event => {
      console.log(event)
      const { name, value } = event.target
      validateField(name, value)     
      console.log('Fired from onChange')

      dispatch(postEvent())
    },
    onChange: event => {
      const {name, value} = event.target
      dispatch(updateNewEventInfo({ name, value }))
    },
    onChangeTimePickerStart: value => {
      dispatch(updateNewEventInfo({ name: "startTime", value }))
    },
    onChangeTimePickerEnd: value => {
      dispatch(updateNewEventInfo({ name: "endTime", value }))
    },
    onChangeDatePicker: day => {
      dispatch(updateNewEventInfo({ name: "selectedDay", value: day }))
    },
    onDrop: file => {
      dispatch({ type: EVENT_FILE_TO_BE_SENT, file})
    },
    importFBEvent: () => {
      dispatch(importFBEvent())

      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
      dispatch({ type: TOGGLE_PREVIEW_EVENT_HIDDEN })
    },
  })
}

const EventAddFormContainer = connect(mapStateToProps, mapDispatchToProps)(EventAddForm)

export default EventAddFormContainer