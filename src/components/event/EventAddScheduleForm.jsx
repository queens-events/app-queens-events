import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DropDown from '../DropDown.jsx'

import "react-day-picker/lib/style.css"
import "../../../style/eventAdd.css"

class EventAddScheduleForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startTime: '',
      endTime: '',
      selectedDay: 0.0
    }
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  };

  render() {

    const { onSubmit } = this.props

    return (
      <div className="popup">
        <form
          onSubmit={onSubmit}
          className="container">

          <div id="eventStart">
            <h1>Starting Time:</h1>
            <div>
              <input
                type="time"
                value={this.state.startTime}
                onChange={event => this.setState({ startTime: event.target.value })} />
            </div>
          </div>

          <div id="eventEnd">
            <h1>Ending Time:</h1>
            <div>
              <input
                type="time"
                value={this.state.endTime}
                onChange={event => this.setState({ endTime: event.target.value })} />
            </div>
          </div>

          <div id="eventDate">
            <h1>Date:</h1>
            <div>
              <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayClick={this.handleDayClick} />
            </div>
          </div>

          <div id="submitDate">
            <input type="submit" value="Submit Event" className="landingButton"></input>
          </div>

        </form>
      </div>
    )
  }
}

export default EventAddScheduleForm