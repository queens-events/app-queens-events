import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DropDown from '../../DropDown.jsx'
import PropTypes from 'prop-types'
import "react-day-picker/lib/style.css"
import "./eventAdd.css"

class CreateEventForm extends Component {
  render() {
    const {
      onSubmit,
      onChange,
      toggleCreateEvent,
      userEvent,
      errors
    } = this.props

    return (
      <div className='popup'>
        <form onSubmit={onSubmit} className="container">
          <div className="createEventHeader">
            <div className="createEventHeaderText">
              <p>Create an Event</p>
            </div>
            <div className="createEventHeaderExit" onClick={toggleCreateEvent}>
              <p>&times;</p>
            </div>
          </div>
          <div className="createEventForm">
            <div id="eventName">
              <h1>Title</h1>
              <div>
                <input
                  name="eventname"
                  //value={userEvent.eventname}
                  onChange={onChange} />
              </div>
            </div>
            <div id="eventPhoto">
              <h1>Event Photo</h1>
              <div>
                <button className="landingButton"> Upload Event Photo</button>
              </div>
            </div>

            <div id="photoView"></div>

            <div id="eventDescription">
              <h1>Description</h1>
              <div>
                <textarea
                  name="description"
                  //value={userEvent.eventDescription}
                  onChange={onChange}
                  cols="52" rows="10"
                  placeholder="Describe your event here! Make sure to include external links." />
              </div>
            </div>

            <div id="eventCategory">
              <h1>Category</h1>       
              <select name="category" /*value={userEvent.eventCategory}*/ onChange={onChange}>
                <option value="Concert"></option>
                <option value="Public Lecture"></option>
                <option value="Fundraiser"></option>
              </select>
               
            </div>

            <div id="eventTags">
              <h1>Tags</h1>
              <div>
                <DropDown
                  name="tags"
                  //value={userEvent.eventTags}
                  listItems={['19+', 'Free', 'In the Community', 'Live Music', 'All ages']}
                  dropText="Select Tags"
                />

              </div>
            </div>

            <div id="eventCost">
              <h1>Cost</h1>
              <div>
                $
                  <input
                  name="cost"
                  //value={userEvent.eventCost}
                  onChange={onChange} />
              </div>
            </div>

            <div id="eventOrg">
              <h1>Organization</h1>
              <div>
                <DropDown
                  name="organization"
                  //value={userEvent.eventOrg}
                  listItems={['Org1', 'Org2', 'Org3']}
                  dropText="Choose Organization"
                  onChange={onChange} />
              </div>
            </div>

            <div id="eventVenue">
              <h1>Venue</h1>
              <div>
                <DropDown
                  name="venue"
                  //value={userEvent.eventVenue}
                  listItems={['Venue1', 'Venue2', 'Venue3']}
                  dropText="Choose Venue"
                  onChange={onChange} />
              </div>
            </div>

            <button className="landingButton" onClick={toggleCreateEvent}> Submit Event</button>
          </div>
        </form>
      </div>
    )
  }
}
/*
CreateEventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  userEvent: PropTypes.object.isRequired
}
*/
export default CreateEventForm
