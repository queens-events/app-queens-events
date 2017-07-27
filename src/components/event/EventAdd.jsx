import React, {Component} from 'react';
import api from '../../http/api.js';

class EventAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      item_url: '',
      fb_event_url: ''
      // image_url: '',
      // cost: '',
      // capacity: '',
      // startTime: '',
      // endTime: ''
    };
  }

  render(){
    return(
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          console.log(this.state);
          let postData = this.state;
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
        Title:
        <br />
        <p>
        <input
          value={this.state.title}
          onChange={event => this.setState({title: event.target.value})} />
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