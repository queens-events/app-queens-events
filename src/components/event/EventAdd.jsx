import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DropDown from '../DropDown.jsx'
import api from '../../http/api.js';

import "react-day-picker/lib/style.css"
import "../../../style/eventAdd.css"
import '../../../style/event.css'


class EventAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      selectedDay: '',
      description: '',
      category: '',
      tag: '',
      cost: '',
      organization: '',
      venue: ''
      
      //item_url: '',
      //fb_event_url: '',
      
      // image_url: '',
      
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

        className="container">
         
            
            <div id="eventName">
                <h1>Title:</h1>
                <div>
                    <input
                        value={this.state.title}
                        onChange={event => this.setState({ title: event.target.value })} />
                </div>
            </div>

            
            <div id="eventDate">
                <h1>Date:</h1>
                <div>
                    <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayClick={this.handleDayClick} />
                </div>
            </div>     

            <br />

            <div id="eventPhoto">
                <h1>Event Photo:</h1>
                <div>
                    <button className="landingButton">Upload Event Photo</button>
                </div>
            </div>

            <div id="eventDescription">
                <h1>Description:</h1>
                <div>
                    <textarea
                        value={this.state.description}
                        onChange={event => this.setState({ description: event.target.value })}
                        cols="52" rows="10"
                        placeholder="Describe your event here! Make sure to include external links."/>
                </div>
            </div>

            <div id="eventCategory">
                <h1>Category:</h1>
                <div>
                    <input
                        value={this.state.category}
                        onChange={event => this.setState({ category: event.target.value })} />
                </div>
            </div>

            <div id="eventTags">
                <h1>Tags:</h1>
                <div>
                    <input
                        value={this.state.tag}
                        onChange={event => this.setState({ tag: event.target.value })} />
                </div>
            </div>

            <div id="eventCost">
                <h1>Cost:</h1>
                <div>
                    <input
                        value={this.state.cost}
                        onChange={event => this.setState({ cost: event.target.value })} />
                </div>
            </div>

            <div id="eventOrg">
                <h1>Organization:</h1>
                <div>
                    <DropDown listItems={[1, 2, 3, 4, 'poop', 'ihatemylife']}/>
                </div>
            </div>

            <div id="eventVenue">
                <h1>Venue:</h1>
                <div>
                    <input
                        value={this.state.venue}
                        onChange={event => this.setState({ venue: event.target.value })} />
                </div>
            </div>

            <div id="submit">
                <button className="landingButton"><h1>Create Event</h1></button>
            </div>
      </form>
    );
  }
}

export default EventAdd