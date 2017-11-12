import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DropDown from '../DropDown.jsx'
import Tags from '../Tags.jsx'
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
      venue: '',
      isHidden: true
      
      //item_url: '',
      //fb_event_url: '',
      
      // image_url: '',
      
      // capacity: '',
      // startTime: '',
      // endTime: ''
    };
  }

  toggleHidden() {
      this.setState({
          isHidden: !this.state.isHidden
      })
  }

  displayForm() {
      return (
          <div className='popup'>
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

                  <div id="photoView"></div>

                  <div id="eventDescription">
                      <h1>Description:</h1>
                      <div>
                          <textarea
                              value={this.state.description}
                              onChange={event => this.setState({ description: event.target.value })}
                              cols="52" rows="10"
                              placeholder="Describe your event here! Make sure to include external links." />
                      </div>
                  </div>

                  <div id="eventCategory">
                      <h1>Category:</h1>
                      <div>
                          <DropDown listItems={['Concert', 'Public Lecture', 'Fundraiser']} dropText="Choose Category" />
                      </div>
                  </div>

                  <div id="eventTags">
                      <h1>Tags:</h1>
                      <div>
                          <Tags tagItems={["event", "lecture", "music", "19+", "night"]} />
                      </div>
                  </div>

                  <div id="eventCost">
                      <h1>Cost:</h1>
                      <div>
                          $
                    <input
                              value={this.state.cost}
                              onChange={event => this.setState({ cost: event.target.value })} />
                      </div>
                  </div>

                  <div id="eventOrg">
                      <h1>Organization:</h1>
                      <div>
                          <DropDown listItems={['Org1', 'Org2', 'Org3']} dropText="Choose Organization" />
                      </div>
                  </div>

                  <div id="eventVenue">
                      <h1>Venue:</h1>
                      <div>
                          <DropDown listItems={['Venue1', 'Venue2', 'Venue3']} dropText="Choose Venue" />
                      </div>
                  </div>

                  <div id="submit">
                      <button className="landingButton" onClick={this.toggleHidden.bind(this)} > <h1>Create Event</h1></button>
                  </div>
              </form>
          </div>
      )    
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render(){
    return(
      <div>
        <button onClick={this.toggleHidden.bind(this)} className="landingButton">
            Create Event
        </button>

        {!this.state.isHidden ? this.displayForm() : null}
      </div>
    );
  }
}

export default EventAdd