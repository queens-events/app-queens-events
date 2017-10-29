import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import api from '../../http/api.js';

import "react-day-picker/lib/style.css"
import "../../../style/eventAdd.css"

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
        
        
        <table className="table">
        <tr>
        <td className="col1">
        
        <div className="headings">
        <h2>
        Event Info
        </h2>
        </div>
        <br />
        
        <div className="element">
        Title:
        </div>
        <div className="textWrapper">
        <input className="textbox"
          value={this.state.title}
          onChange={event => this.setState({title: event.target.value})} />
        </div>
        <br />
  
        
        <div className="element">
        Date:  
        </div>
        <div className="textWrapper">
        <DayPickerInput className="textbox" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayClick={this.handleDayClick}/>
        <br />
        </div>
        
        <div className="element">
        Description:
        </div>
        <div className="textWrapper">
        <textarea className="textbox"
          value={this.state.description}
          onChange={event => this.setState({description: event.target.value})}
          cols="50" rows="10" />
       <br />
       </div>
       
       </td>
        
        <td className="col2">

        <div className="headings">
        <h2>
        URLs
        </h2>       
        </div>

        <br />

        <div className="element">
        Event URL:
        </div>
        <div className = "textWrapper">
        <input className="textbox"
          value={this.state.item_url}
          onChange={event => this.setState({item_url: event.target.value})} />
        </div>

        <div className="element">
        FB Event URL:
        </div>
        <div className="textWrapper">
        <input className="textbox"
          value={this.state.fb_event_url}
          onChange={event => this.setState({fb_event_url: event.target.value})} />
        </div>
        
        <p className="submitWrapper">
          <button className="submit">Submit Event</button>
        </p>
        </td>
        </tr>
        </table>
      </form>
    );
  }
}

export default EventAdd