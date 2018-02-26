import React, { Component } from 'react';
import EventAddForm from './EventAddFormContainer.jsx'
import EventAddScheduleForm from './EventAddScheduleForm.jsx'
import EventAddPreview from './EventAddPreviewContainer.jsx'


class EventAdd extends Component {
  constructor(props) {
    super(props);
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
        <button onClick={this.props.toggleCreateEventForm} className="landingButton">
          Create Event
        </button>

        {/* {!this.props.createEventHidden ? <EventAddForm onSubmit={this.nextForm.bind(this)} /> : null} */}
        {!this.props.previewEventHidden ? <EventAddPreview onSubmit={this.nextForm.bind(this)} /> : null}
      </div>
    );
  }
}

export default EventAdd