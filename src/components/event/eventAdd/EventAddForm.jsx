import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DropDown from '../../DropDown.jsx'

import "react-day-picker/lib/style.css"
import "./eventAdd.css"

class EventAddForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      category: '',
      tags: [],
      cost: '',
      organization: '',
      venue: ''
    }
  }

  render() {
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
                listItems={['19+', 'Free', 'In the Community', 'Live Music', 'All ages']}
                dropText="Select Tags"
                onChange={event => { (this.state.tags.indexOf(event.target.textContent) === -1) ? this.setState({ tags: this.state.tags.concat([event.target.textContent]) }) : null }} />
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
            <button className="landingButton" onClick={this.props.onSubmit.bind(this)}><h1>Next</h1></button>
          </div>
        </form>
      </div>
    )
  }
}

export default EventAddForm