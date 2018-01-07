import React, {Component} from 'react'
import MapGL, { Marker, CityPin } from 'react-map-gl'
import eventDetailStyle from './eventDetail.css'

class EventDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    
    this.cardImageStyle = {
      backgroundImage: `url(${this.props.imageUrl})` || 'url(https://www.resortcollection.com/wp-content/uploads/2015/11/resort-collection-blog-oct15-weekend-events-panama-city-beach-hero-e1447883346302.jpg)'
    }
  }

  componentWillMount() {
    
  }

  render() {
    return(
      <div className="eventDetailContainer">
        <div className="eventDetailLeftContainter">
          <div className="eventDetailImage" style={this.cardImageStyle}/>
          <MapGL
            mapStyle={"mapbox://styles/mapbox/streets-v10"}
            width={400}
            height={300}
            latitude={44.231}
            longitude={-76.4860}
            zoom={13}
            onViewportChange={(viewport) => {
              const {width, height, latitude, longitude, zoom} = viewport;
              // Optionally call `setState` and use the state to update the map.
            }}
          >
            {/* <Marker key={`marker-${this.state.title}`}
              longitude={44.231}
              latitude={-76.4860} >
              <CityPin size={20} /> */}
              {/* onClick={() => this.setState({popupInfo: city})} */}
            {/* </Marker> */}
          </MapGL>
        </div>
        <div className="eventDetailRightContainer">
          <h1>{this.props.name}</h1>
        </div>
      </div>
      
    );
  }
}

export default EventDetail