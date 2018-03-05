import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TimePicker from 'rc-time-picker'
import moment from 'moment'

import "react-day-picker/lib/style.css"
import 'rc-time-picker/assets/index.css'
import "./eventAdd.css"

const format = 'h:mm a'
const now = moment().hour(0).minute(0)

class EventAddForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { onChange, onChangeTimePickerStart, onChangeTimePickerEnd, onChangeDatePicker,
      onSubmit, onDrop, newEvent, toggleCreateEventForm, togglePreviewEventForm,
      importFBEvent } = this.props

    return (
      <div className='popup'>
        <form className="container" onSubmit={onSubmit}>
          <div className="createEventHeader">
            <div className="createEventHeaderText">
              <p>Create an Event</p>
            </div>
            <div className="createEventHeaderExit" onClick={toggleCreateEventForm}>
              <p>&times;</p>
            </div>
          </div>

          <div className="createEventForm">
            <div id="eventName">
              <h1>Title:</h1>
              <div>
                <input
                  name="name"
                  value={newEvent.title}
                  onChange={onChange} />
              </div>
            </div>

            <div className="eventName">
              <h1>Import with Facebook:</h1>
              <div>
                <input
                  type="text"
                  name="fbEventID"
                  value={newEvent.fbeventID}
                  onChange={onChange}/>
                <button
                  type="button"
                  onClick={importFBEvent}
                  className="landingButton">Import</button>
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
                  value={newEvent.description}
                  onChange={onChange}
                  cols="52" rows="10"
                  placeholder="Describe your event here! Make sure to include external links." />
                {console.log(newEvent.description)}
              </div>
            </div>

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
              <h1>Cost:</h1>
              <div>
                $
                      <input
                  name="cost"
                  value={newEvent.cost}
                  onChange={onChange} />
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

            <div id="eventStart">
              <h1>Starting Time:</h1>
              <div>
                  <TimePicker
                    name="startTime"
                    showSecond={false}
                    defaultValue={now}
                    value={newEvent.startTime}
                    onChange={onChangeTimePickerStart}
                    format={format}
                    use12Hours
                  />
              </div>
            </div>

            <div id="eventEnd">
              <h1>Ending Time:</h1>
              <div>
                  <TimePicker
                    showSecond={false}
                    defaultValue={now}
                    name="endTime"
                    value={newEvent.endTime}
                    onChange={onChangeTimePickerEnd}
                    format={format}
                    use12Hours
                  />
              </div>
            </div>

            <div id="eventDate">
              <h1>Date:</h1>
              <div>
                <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={onChangeDatePicker} />
              </div>
            </div>

            <div id="submitDate">
              <button type="button"
                  onClick={togglePreviewEventForm}
                  className="landingButton">Preview</button>
              <button type="submit" className="landingButton">Submit Event</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EventAddForm