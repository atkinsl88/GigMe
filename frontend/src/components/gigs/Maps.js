import React from 'react'
import axios from 'axios'
import MapGL, { Marker , Popup } from 'react-map-gl'
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../../../src/styles/main.scss'

class Maps extends React.Component {
  state = {
    venues: [],
    // selectedVenue: null,
    //! setting viewport is part of allowing the pan and zoom as well as default focus
    viewport: {
      latitude: 51.5,
      longitude: -0.14,
      zoom: 11,
      bearing: 0,
      pitch: 0
    }
  }

  //! May want to pass this data call in as props eventually, for now I made it separate to test the map.
  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      // console.log(res.data)
      this.setState({ venues: res.data })
    } catch (err) {
      console.log(err)
    }
  }

render() {

return (
  <MapGL
  {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWlzaGF0aG5hc2lyIiwiYSI6ImNrZHllYW51ODRodGIydHJvbm1yc2lkZHgifQ.8C_6datWjuBQUQbfsBAsOg"
        height={'100vh'}
        width={'100vw'}
        onViewportChange={viewport => this.setState({viewport})}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        {this.state.venues.map(venue => (
          <>
          <Marker
            key={venue._id}
            value={venue.venue}
            latitude={venue.latitude}
            longitude={venue.longitude}
            >
            <span role="img" aria-label="marker" height="50" onClick = {(e) => {
              console.log(e.target.venue)
            }}>🔴</span>
            <div key={venue.artistName} className="mapLabels" >{venue.venue}</div>
          </Marker>
          </>
        ))}
        
      </MapGL>
)
}
}

export default Maps