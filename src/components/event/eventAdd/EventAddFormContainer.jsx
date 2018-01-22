import { connect } from 'react-redux'
import {
  postEvent,
  updateNewEventInfo,
  EVENT_FILE_TO_BE_SENT,
  TOGGLE_CREATE_EVENT_HIDDEN,
} from '../../../actions/index'
import EventAddForm from './EventAddForm.jsx'

let filledFields = 0
let tempName = ""

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCreateEventForm: () => {
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
    },
    onSubmit: event => {
      event.preventDefault()
      event.target.reset()
      console.log("Event Attempted to be posted!")
      if (filledFields < 3) {
        alert("Please fill all fields")
      }
      else {
        dispatch(postEvent())
        dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
      }
    },
    onChange: event => {
      console.log(event)
      const { name, value, type } = event.target
      if (name !== tempName && (type == "text" || type == "number" || type == "textarea")) {
        filledFields++
        tempName = name
      }
      console.log('Fired from onChange')
      dispatch(updateNewEventInfo({ name, value }))
    },
    onChangeTimePickerStart: value => {
      dispatch(updateNewEventInfo({ name: "startTime" , value }))
    },
    onChangeTimePickerEnd: value => {
      dispatch(updateNewEventInfo({ name: "endTime" , value }))
    },
    onChangeDatePicker: day => {
      dispatch(updateNewEventInfo({name: "selectedDay", value: day}))
    },
    onDrop: file => {
      dispatch({type: EVENT_FILE_TO_BE_SENT, file})
    }
  })
}

const EventAddFormContainer = connect(mapStateToProps, mapDispatchToProps)(EventAddForm)

export default EventAddFormContainer