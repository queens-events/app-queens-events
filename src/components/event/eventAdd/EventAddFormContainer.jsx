import { connect } from 'react-redux'
import {
  postEvent,
  updateNewEventInfo,
  EVENT_FILE_TO_BE_SENT,
  TOGGLE_CREATE_EVENT_HIDDEN,
} from '../../../actions/index'
import EventAddForm from './EventAddForm.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    toggleCreateEventForm: () => {
      dispatch({ type: TOGGLE_CREATE_EVENT_HIDDEN })
    },
    onSubmit: event => {
      event.preventDefault();
      event.target.reset()
      console.log("Event Attempted to by posted!")
      dispatch(postEvent())
    },
    onChange: event => {
      const {name, value} = event.target
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