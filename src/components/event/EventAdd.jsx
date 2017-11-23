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
      tags: [],
      cost: '',
      organization: '',
      venue: '',
      startTime: '',
      endTime: '',
      isHidden: true,
      scheduleHidden: true

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

  toggleSchedule() {
      this.setState({
          scheduleHidden: !this.state.scheduleHidden
      })

  }

  nextForm() {
      this.setState ({
          isHidden: !this.state.isHidden,
          scheduleHidden: !this.state.scheduleHidden
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
                             
                  <div id="eventPhoto">
                      <h1>Event Photo:</h1>
                      <div>
                          <button className="landingButton"> Upload Event Photo</button>
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
                          {console.log(this.state.description)}
                      </div>
                  </div>

                  <div id="eventCategory">
                      <h1>Category:</h1>
                      <div>
                          <DropDown className="k"
                              listItems={['Concert', 'Public Lecture', 'Fundraiser']}
                              dropText="Choose Category"
                              onChange={event => this.setState({ category: event.target.textContent })} />
                      </div>
                  </div>

                  <div id="eventTags">
                      <h1>Tags:</h1>
                      <div>
                          <DropDown
                              listItems={['19+', 'free', 'In the Community', 'Live Music', 'All ages']}
                              dropText="This is droptext"
                              onChange={event => { if (this.state.tags.indexOf(event.target.textContent) === -1) { this.setState({ tags: this.state.tags.concat([event.target.textContent]) }) } }} />
                          {console.log(this.state.tags)}
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
                          <DropDown
                              listItems={['Org1', 'Org2', 'Org3']}
                              dropText="Choose Organization"
                              onChange={event => this.setState({ organization: event.target.textContent })} />
                          
                      </div>
                  </div>

                  <div id="eventVenue">
                      <h1>Venue:</h1>
                      <div>
                          <DropDown
                              listItems={['Venue1', 'Venue2', 'Venue3']}
                              dropText="Choose Venue"
                              onChange={event => this.setState({ venue: event.target.textContent })} />
                      </div>
                  </div>

                  <div id="submitForm">
                      <button className="landingButton" onClick={this.nextForm.bind(this)}><h1>Next</h1></button>                  
                  </div>
              </form>
          </div>
      )    
  }

  scheduleForm() {
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
                  </div>

                  <div id="submitDate">
                      <button className="landingButton" onClick={this.toggleSchedule.bind(this)}><h1>Submit Event</h1></button>
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
        {!this.state.scheduleHidden && this.scheduleForm()}
      </div>
    );
  }
}

export default EventAdd