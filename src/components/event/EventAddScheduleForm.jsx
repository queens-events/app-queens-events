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
      selectedDay: ''
    }
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render() {
    return (
      <div className="popup">
        <form
          onSubmit={event => {
            event.preventDefault()
            event.target.reset()
            console.log(this.state);
            let postData = this.state;
            postData.date = undefined;
          }}
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
            {console.log(this.state.selectedDay)}
          </div>

          <div id="submitDate">
            <button className="landingButton" onClick={this.props.onSubmit.bind(this)}><h1>Submit Event</h1></button>
          </div>

        </form>
      </div>
    )
  }
}

export default EventAddScheduleForm