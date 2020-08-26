import React from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../../../src/styles/main.scss'

import { Link } from 'react-router-dom'

class Maps extends React.Component {
  state = {
    searchResults:[],
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
      console.log(res.data)
      this.setState({ venues: res.data })
      // console.log("these are the venues" , this.state.venues)
    } catch (err) {
      console.log(err)
    }
  }

  handleClick = async event => {
    event.preventDefault()
    const venue=event.target.venue
    // console.log(genre)
    const results = this.state.venues.filter(gig => (
      gig.venue === event.target.value
    ))
    // console.log(results)
    this.setState({ searchResults: results})
    // console.log(this.state.searchResults)

  }

render() {
  // console.log(this.state.venues)
return (
  <div>
  <MapGL
  {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWlzaGF0aG5hc2lyIiwiYSI6ImNrZHllYW51ODRodGIydHJvbm1yc2lkZHgifQ.8C_6datWjuBQUQbfsBAsOg"
        height={'600px'}
        width={'1500px'}
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
              // console.log(e.target.venue)
            }}>🔴</span>
            <button key={venue.artistName} className="mapLabels" value={venue.venue} onClick={this.handleClick} >{venue.venue}</button>
          </Marker>
          </>
        ))}
        
      </MapGL>
      {/* <div className="mapSearchHeader"><h1> Click a location for events!</h1></div> */}
      
      <div className="mapSearch">
      <div className="three-col">
        {this.state.searchResults.map(name => {
          return (
            <div className="three-col-content" key={name.id}>
              <img src={name.posterImage} alt="logo" />
              <h3>{name.artistName}</h3>
              <h4>{name.aboutEvent}</h4>
              <h5>{name.date}</h5>
              <Link to={`/gigs/${name._id}`} className="button">Find out more</Link>
            </div>
          )
        })}
      </div>
      </div>
      </div>
)
}
}

export default Maps