import React, { Component } from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCalendar, faFacebook } from '@fortawesome/fontawesome-free-solid'

import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import CityPin from './city-pin'
import './eventDetail.css'

// fontawesome.library.add(faCalendar, faFacebook)

class EventDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      viewport: {
        latitude: 44.231,
        longitude: -76.4860,
        zoom: 13,
        bearing: 0,
        pitch: 0,
        width: 400,
        height: 300,
      },
      popupInfo: null,
    }

    this.cardImageStyle = {
      backgroundImage: `url(${this.props.event.imageUrl})` || `url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)`
    }
  }

  _updateViewport (viewport) {
    this.setState({ viewport })
  }

  render () {
    const { viewport } = this.state
    const {
      name,
      date,
      month,
      startTimeFormatted,
      endTimeFormatted,
    } = this.props.event

    return (
      <div className="eventDetailContainer">
        <div className="eventDetailLeftContainer">
          <div className="eventDetailImage" style={this.cardImageStyle} />
        </div>
        <div className="eventDetailRightContainer">
          <div className="eventDetailTitle">
            <h1>{name}</h1>
          </div>
          <div className="eventDetailSubtitle">
            <div className="eventDetailTiming">
              <FontAwesomeIcon icon="calendar" size="lg" />
              <div className="eventDetailDate">
                <h1>{date}</h1>
              </div>
              <div className="eventDetailMonth">
                <p>{month}</p>
              </div>
              <div className="eventDetailStartEndTime">
                <p>{startTimeFormatted}-{endTimeFormatted}</p>
              </div>
            </div>
            <div className="eventDetailVenue">
              <div>
                <FontAwesomeIcon icon="map-marker" size="lg" />
              </div>
              <div>The Mansion</div>
            </div>
            <div className="eventDetailFB">
              <FontAwesomeIcon icon="facebook" size="lg" />
            </div>
            <div className="eventDetailTicket">
              <FontAwesomeIcon icon="ticket-alt" size="lg" />
            </div>
          </div>
          <div className="eventDetailDescription">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor varius pulvinar. Morbi mollis libero sit amet nisi varius, consequat mollis purus tristique. Proin a bibendum metus, id mattis velit. Integer urna lacus, consequat in tempor id, cursus sit amet leo. Sed at massa pretium, mattis diam et, rutrum erat. Fusce quis ipsum at nisl finibus tincidunt id sed orci. Cras et ante sit amet felis lacinia iaculis quis eu orci. Mauris vel ligula feugiat, hendrerit diam ut, consectetur lacus. Nam sed sapien in mi scelerisque sodales eu quis orci. Vivamus nisi mauris, bibendum quis facilisis et, lobortis ac mauris. Etiam vitae consectetur dui. Donec vulputate dolor sit amet odio rhoncus, sit amet tempus massa accumsan. Vivamus tellus lectus, porttitor id porta eget, ullamcorper ut est. Morbi fringilla magna dolor, et elementum tortor eleifend a.
            </p>
          </div>
          <div className="eventDetailInfo">
            <div className="locationTitle">Location</div>
            <div className="eventDetailVenueContainer">
              <div className="eventDetailVenueInfo">

                <div className="venueInfoContainer">
                  <div className="venueBold">Venue</div>
                  <div className="venue">The Mansion</div>
                </div>

                <div className="venueInfoContainer">
                  <div className="venueBold">Address</div>
                  <div className="venueStreetAddress">
                    123 Coventry Lane, Kingston, ON K8H 1B6
                  </div>
                </div>

                <div className="venueInfoContainer">
                  <div className="venueBold">Website</div>
                  <div className="venueWebsite">https://themansion.org</div>
                </div>
              </div>
              <div className="eventDetailMapbox">
                <MapGL
                  {...viewport}
                  mapStyle={'mapbox://styles/mapbox/streets-v10'}
                  onViewportChange={this._updateViewport}
                >
                  <Marker
                    longitude={44.231}
                    latitude={-76.4860} >
                    <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
                  </Marker>
                </MapGL>
              </div>
            </div>

            <div className="eventDetailAdditionalInfo">
              <div className="locationTitle">Details</div>
              <div className="eventDetailVenueContainer">
                <div className="eventDetailVenueInfo">

                  <div className="venueInfoContainer">
                    <div className="venueBold">Date</div>
                    <div className="venueStreetAddress">
                      {date} {month}
                    </div>
                  </div>

                  <div className="venueInfoContainer">
                    <div className="venueBold">Time</div>
                    <div className="venueStreetAddress">
                      {startTimeFormatted}-{endTimeFormatted}
                    </div>
                  </div>
                </div>
                <div className="eventDetailVenueInfo">
                  <div className="venueInfoContainer">
                    <div className="venueBold">Event Category</div>
                    <div className="venueStreetAddress">
                      Cool Category
                    </div>
                  </div>

                  <div className="venueInfoContainer">
                    <div className="venueBold">Event Tags</div>
                    <div className="venueStreetAddress">
                      19+, Free
                    </div>
                  </div>

                  <div className="venueInfoContainer">
                    <div className="venueBold">Website</div>
                    <div className="venueStreetAddress">
                      https://queensevents.ca
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetail
