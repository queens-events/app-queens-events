import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import api from '../../http/api.js';

import "react-day-picker/lib/style.css"
{/*import "../../../style/eventAdd.css"*/ }

class EventAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      selectedDay: '',
      description: '',
      category: '';
      tag: '';
      cost: '';
      organization: '';
      venue: '';
      
      //item_url: '',
      //fb_event_url: '',
      
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
          api.post('/events', postData)
            .then(resp => {
              if (resp.status == "success") {
                let data = JSON.parse(resp);
                console.log('Posted!')
              }
            })
            .catch((err) => console.log(err))
            }}
      >

      
        
      </form>
    );
  }
}

export default EventAdd