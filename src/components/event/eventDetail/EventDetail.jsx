import React, {Component} from 'react'
import MapGL, { Marker } from 'react-map-gl'
// import {render} from 'react-dom';
import CityPin from './city-pin'
import eventDetailStyle from './eventDetail.css'

class EventDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)

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
      popupInfo: null
    }
    
    this.cardImageStyle = {
      backgroundImage: `url(${this.props.imageUrl})` || 'url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)'
    }
  }

  componentWillMount() {
    
  }

  _updateViewport(viewport) {
    this.setState({viewport});
  }

  render() {
    
    const {viewport} = this.state;
    
    return(
      <div className="eventDetailContainer">
        <div className="eventDetailLeftContainter">
          <div>
            <div className="eventDetailImage" style={this.cardImageStyle}/>
          </div>
          <div className="eventDetailMapbox">
            <MapGL
              {...viewport}
              mapStyle={"mapbox://styles/mapbox/streets-v10"}
              onViewportChange={this._updateViewport}
            >
              <Marker
                longitude={44.231}
                latitude={-76.4860} >
                <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
              </Marker>
            </MapGL>
          </div>
        </div>
        <div className="eventDetailRightContainer">
          <div className="eventDetailTitle">
            <h1>{this.props.name}</h1>
          </div>
          <div className="eventDetailTiming">
            {/* <div className="eventDetailDate"> */}
            <div className="eventDetailDate">
              <h1>{this.props.date}</h1>  
            </div>
            <div className="eventDetailMonth">
              <p>{this.props.month}</p>
            </div>
            <div className="eventDetailStartEndTime">
              <p>{this.props.startTime}-{this.props.endTime}</p>
            </div>
          </div>
          <div className="eventDetailDescription">
            <p>
              This is a barebones description beceause I was too lazy to put anything of substance into the event data. From here, we can detect how much space is taken up by the description
            </p>
          </div>
          <div className="eventDetailInfo">
          </div>
        </div>
      </div>
      
    );
  }
}

export default EventDetail