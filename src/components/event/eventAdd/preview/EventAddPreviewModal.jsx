import React, { Component } from 'react';

import './eventPreview.css'

class EventAddPreview extends Component {
  render(){
    let {
      name,
      description,
      image_url,
      category,
      tags,
      recurrence,
      venue,
      cost,
      city,
      country,
      state,
      address,
      zip,
      day,
      dateOrdinal,
      month,
      website_url,
      ticket_uri,
      startTimeFormatted,
      endTimeFormatted,
      onSubmit,
    } = this.props.newEvent

    const {
      togglePreviewEventForm,
      toggleCreateEventForm,
    } = this.props

    const cardImageStyle = {
      backgroundImage: `url(${image_url})`
    }

    if (image_url === undefined) {
      if (this.props.fileToBeSent !== undefined){
        image_url = this.props.fileToBeSent[0].preview
      }
    }

    return(
      <div className='popup'>
        <form className="previewContainer" onSubmit={onSubmit}>
          <div className="previewEventHeader">
            Preview Event
          </div>
          <div className="previewEventHeaderExit" onClick={togglePreviewEventForm}>
            <p>&times;</p>
          </div>

          <div className="eventPreviewImage">
            <img src={image_url}/>
          </div>

          <div className="eventContent">
            <div className="eventName">
              <h2>{name}</h2>
            </div>

            <div className="eventRecurrence">
              <p>{recurrence || '--'}</p>
            </div>

            <div className="eventVenue">
              <p>{venue || '--'}</p>
            </div>

            <div className="eventStartTime">
              <p>{day || '--'}, {month || '--'} {dateOrdinal || '--'} {startTimeFormatted || '--'} - {endTimeFormatted || '--'}</p>
            </div>
          </div>

          <div className="eventAdditionalInfo">
            <div className="eventDescription">
              <h2>
                Description:
              </h2>
                {description}
            </div>

            <div className="eventLocation">
              <div className="eventLocationTitle">
                <h2>
                  Location:
                </h2>
              </div>
              <div className="eventLocationContent">
                <div>
                  <h3>Venue</h3>
                  {venue || '--'}
                </div>

                <div>
                  <h3>Address</h3>
                  {address || '--'}, {city || '--'}, {state || '--'}, {country || '--'}
                </div>

                <div>
                  <h3>Website</h3>
                  {website_url || '--'}
                </div>
              </div>
            </div>

            <div className="eventDetails">
              <div className="eventDetailsTitle">
                <h2>
                  Details:
                </h2>
              </div>
              <div className="eventDetailsContent">
                <div>
                  <h3>Date</h3>
                  {day || '--'}, {month || '--'} {dateOrdinal || '--'}
                </div>
                <div>
                  <h3>Time</h3>
                  {startTimeFormatted || '--'} - {endTimeFormatted || '--'}
                </div>
                <div>
                  <h3>Cost</h3>
                  {cost || '--'}
                </div>
                <div>
                  <h3>Event Category</h3>
                  {category || '--'}
                </div>
                <div>
                  <h3>Event Tags</h3>
                  {tags || '--'}
                </div>
                <div>
                  <h3>Event Recurrence</h3>
                  {recurrence || '--'}
                </div>
                <div>
                  <h3>Website</h3>
                  {website_url || ticket_uri || '--'}
                </div>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button type="button" onClick={toggleCreateEventForm} className="editButton">Edit</button>
            <button type="submit" className="submitButton">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EventAddPreview