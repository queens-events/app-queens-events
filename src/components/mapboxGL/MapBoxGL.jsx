import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
mapboxgl.accessToken = process.env.MapboxAccessToken;

class MapBoxGL extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

  componentWillUnmount(){
    this.map.remove();
  }
  
  render() {
    return(
      
    )
  }
}

export default MapBoxGL