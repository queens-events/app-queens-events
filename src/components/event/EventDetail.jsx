import React, {Component} from 'react'

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      item_url: '',
      fb_event_url: '',
      image_url: '',
      cost: '',
      capacity: '',
      startTime: '',
      endTime: ''
    };
  }

  componentWillMount() {
    // api.get(`/events/${this.props.match.params.eventID}`)
    //   .then(resp => {
    //     console.log(resp);
    //   })
    //   .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <h1>This is the EventDetail</h1>
        <h3>{match.params.eventID}</h3>
      </div>
    );
  }
}

export default EventDetail