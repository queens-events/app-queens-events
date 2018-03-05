import React, { Component } from 'react';

import './eventPreview.css'

class EventAddPreview extends Component {
  render(){
    const {
      title,
      description,
      image_url,
      category,
      venue,
      city,
      country,
      state,
      address,
      zip,
      day,
      dateOrdinal,
      month,
      startTime,
      endTime,
      onSubmit,
      togglePreviewEventForm
    } = this.props

    // || `url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)`

    const cardImageStyle = {
      backgroundImage: `url(${image_url})`
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
            {/* <div className="eventPic" style={this.cardImageStyle}/> */}
            <img src={image_url}/>
          </div>

          <div className="eventContent">
            <div className="eventName">
              {/* <h2>Event Title Goes Here</h2> */}
              <h2>{title}</h2>
            </div>

            <div className="eventVenue">
              {/* <p>KGH Hostpital, Critical Care Unit</p> */}
              <p>{venue}</p>
            </div>

            <div className="eventStartTime">
              {/* <p>Friday, March 2nd 12:30 pm - 4:30 pm</p> */}
              <p>{day}, {month} {dateOrdinal} {startTime} - {endTime}</p>
            </div>

            {/* <div className="eventEndTime">
              <p>Friday, March 2nd </p>
            </div> */}
          </div>

          <div className="eventAdditionalInfo">
            <div className="eventDescription">
              <h2>
                Description:
              </h2>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor varius pulvinar. Morbi mollis libero sit amet nisi varius, consequat mollis purus tristique. Proin a bibendum metus, id mattis velit. Integer urna lacus, consequat in tempor id, cursus sit amet leo. Sed at massa pretium, mattis diam et, rutrum erat. Fusce quis ipsum at nisl finibus tincidunt id sed orci. Cras et ante sit amet felis lacinia iaculis quis eu orci. Mauris vel ligula feugiat, hendrerit diam ut, consectetur lacus. Nam sed sapien in mi scelerisque sodales eu quis orci. Vivamus nisi mauris, bibendum quis facilisis et, lobortis ac mauris. Etiam vitae consectetur dui. Donec vulputate dolor sit amet odio rhoncus, sit amet tempus massa accumsan. Vivamus tellus lectus, porttitor id porta eget, ullamcorper ut est. Morbi fringilla magna dolor, et elementum tortor eleifend a. */}
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
                  {/* KGH Hostpital, Critical Care Unit */}
                  {venue}
                </div>

                <div>
                  <h3>Address</h3>
                  {/* 135 Address St. Ablequreque NM */}
                  {address}, {city}, {state}, {country}
                </div>

                <div>
                  <h3>Website</h3>
                  https://superfly.com
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
                  {/* Fri, Jan 12th */}
                  {day}, {month} {dateOrdinal}
                </div>
                <div>
                  <h3>Time</h3>
                  {startTime} - {endTime}
                </div>
                <div>
                  <h3>Event Category</h3>
                  {category}
                </div>
                <div>
                  <h3>Event Tags</h3>
                  19+ Socials
                </div>
                <div>
                  <h3>Website</h3>
                  https://kgh-event.com
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>
    );
  }
}

export default EventAddPreview