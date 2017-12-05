import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import authHTTP from '../../middleware/authHTTP';

import "react-day-picker/lib/style.css"

class EventAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      item_url: '',
      fb_event_url: '',
      selectedDay: '',
      // image_url: '',
      // cost: '',

      // capacity: '',
      // startTime: '',
      // endTime: ''
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render(){
    return(
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          console.log(this.state);
          let postData = this.state;
          postData.date = undefined;
          authHTTP.post('/events', postData)
            .then(resp => {
              if (resp.status == "success") {
                let data = JSON.parse(resp);
                console.log('Posted!')
              }
            })
            .catch((err) => console.log(err))
        }}
      >
        Title:
        <br />
        <p>
        <input
          value={this.state.title}
          onChange={event => this.setState({title: event.target.value})} />
        </p>

        Date:
        <br />
        <p>
        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayClick={this.handleDayClick}/>
        </p>

        Description:
        <br />
        <p>
        <textarea
          value={this.state.description}
          onChange={event => this.setState({description: event.target.value})}
          cols="50" rows="10" />
        </p>

        Event URL:
        <br />
        <p>
        <input
          value={this.state.item_url}
          onChange={event => this.setState({item_url: event.target.value})} />
        </p>

        FB Event URL:
        <br />
        <p>
        <input
          value={this.state.fb_event_url}
          onChange={event => this.setState({fb_event_url: event.target.value})} />
        </p>

        <p>
          <button>Submit Event</button>
        </p>
      </form>
    );
  }
}

export default EventAdd