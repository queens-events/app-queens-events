import React, { Component } from 'react';

import './eventPreview.css'

class EventAddPreview extends Component {
  render(){
    // const onSubmit = () => {
    //   console.log("Hi")
    // }

    // const toggleCreateEventForm = () => {
    //   console.log("Nothing")
    // }

    const cardImageStyle = {
      backgroundImage: `url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)`
    }

    const { onSubmit, togglePreviewEventForm } = this.props

    return(
      <div className='popup'>
        <form className="previewContainer" onSubmit={onSubmit}>
          <div className="previewEventHeader">
            {/* <div className="previewEventHeaderText"> */}
            Preview Event
            {/* </div> */}
          </div>
          <div className="previewEventHeaderExit" onClick={togglePreviewEventForm}>
            <p>&times;</p>
          </div>

          <div className="eventPic">
            <div className="eventPreviewlImage" style={this.cardImageStyle} />
          </div>

          <div className="eventName">
          </div>

          <div className="eventVenue">
          </div>

          <div className="eventStartTime">
          </div>

          <div className="eventEndTime">
          </div>

          <div className="eventDescription">
          </div>

        </form>
      </div>
    );
  }
}

export default EventAddPreview