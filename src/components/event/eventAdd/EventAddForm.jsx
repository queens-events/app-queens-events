import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import moment from 'moment'
import TimePicker from 'react-times'

import 'react-times/css/classic/default.css'
import "react-day-picker/lib/style.css"
import "./eventAdd.css"

const format = 'hh:mm'
const now = moment().hour(0).minute(0)

class EventAddForm extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    let { onChange, onChangeTimePickerStart, onChangeTimePickerEnd, onChangeDatePicker,
      onSubmit, onDrop, newEvent, toggleCreateEventForm } = this.props

    if (newEvent.category == undefined && newEvent.tag == undefined && newEvent.venue == undefined && newEvent.recurrence == undefined) {
      newEvent.category = "HEALTH"
      newEvent.tag = "19+_SOCIALS"
      newEvent.venue = "Venue1"
      newEvent.recurrence = "None"
    }

    return (
      <div className='popup'>
        <form className="container" onSubmit={onSubmit}>
          <div className="createEventHeader">
            <div className="createEventHeaderText">
              <h1>Create an Event</h1>
            </div>
            <div className="createEventHeaderExit" onClick={toggleCreateEventForm}>
              <h1>&times;</h1>
            </div>
          </div>

          <div className="createEventForm">
            <div id="eventName">
              <h1>Title:</h1>
              <div>
                <input
                  name="title"
                  type="text"
                  value={newEvent.title}
                  onChange={onChange} />
              </div>
            </div>

            <div id="eventPhoto">
              <h1>Event Photo:</h1>
              <div>
                <Dropzone onDrop={(files) => onDrop(files)}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
              </div>
            </div>

            <div id="photoView"></div>

            <div id="eventDescription">
              <h1>Description:</h1>
              <div>
                <textarea
                  name="description"
                  type="text"
                  value={newEvent.description}
                  onChange={onChange}
                  cols="52" rows="10"
                  placeholder="Describe your event here! Make sure to include external links." />
              </div>
            </div>

            <div id="horizontal">
            
              <div id="eventCategory">
                <h1>Category:</h1>
                <div>
                  <select name="category" value={newEvent.category} onChange={onChange}>
                    <option value="HEALTH">Health</option>
                    <option value="EDUCATION">Education</option>
                    <option value="SPORTS">Sports</option>
                    <option value="CONCERTS">Concerts</option>
                    <option value="ARTS_AND_THEATER">Arts and Theater</option>
                    <option value="SOCIALS">Socials</option>
                  </select>
                </div>
              </div>

              <div id="eventTags">
                <h1>Tags:</h1>
                <div>
                  <select name="tags" value={newEvent.tag} onChange={onChange}>
                    <option value="19+_SOCIALS">19+</option>
                    <option value="ALL_AGES">All Ages</option>
                    <option value="FREE">Free</option>
                  </select>
                </div>
              </div>

              <div id="eventCost">
                <h1>Cost ($):</h1>
                <div>
                    <input name="cost" value={newEvent.cost} onChange={onChange} />
                </div>
              </div>

              <div id="eventVenue">
                <h1>Venue:</h1>
                <div>
                  <select name="venue" value={newEvent.venue} onChange={onChange}>
                    <option value="Venue1">Venue1</option>
                    <option value="Venue2">Venue2</option>
                    <option value="Venue3">Venue3</option>
                  </select>
                </div>
              </div>
            
            </div>
            <div id="eventStart">
              <h1>Starting Time:</h1>
              <div>
                  <TimePicker
                    name="startTime"
                    theme="classic"
                    format={format}
                    timeMode="24"
                    value={newEvent.startTime}
                    onTimeChange={onChangeTimePickerStart}
                  />
              </div>
            </div>
            
            <div id="eventEnd">
              <h1>Ending Time:</h1>
              <div>
                  <TimePicker
                    name="endTime"
                    theme="classic"
                    format={format}
                    timeMode="24"
                    value={newEvent.endTime}
                    onTimeChange={onChangeTimePickerStart}
                  />
              </div>
            </div>

            <div id="eventDate">
              <h1>Date:</h1>
              <div>
                <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={onChangeDatePicker} value={newEvent.date} />
              </div>
            </div>

            <div id="eventRecurrence">
              <h1>Event Recurrence</h1>
              <div>
                <select name="recurrence" value={newEvent.recurrence} defaultValue="None" onChange={onChange}>
                  <option value="None">None</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Daily">Daily</option>
                </select>
              </div>
            </div>

            <div id="submitDate">
              <button className="landingButton" type="submit"><h1>Submit Event</h1></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EventAddForm