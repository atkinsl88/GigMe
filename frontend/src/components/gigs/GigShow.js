import React from 'react'
// import image from '../../assets/001.png'
import axios from 'axios'

class GigShow extends React.Component {
  state = {
    event: []
  }

  async componentDidMount() {
    try {
      const eventId = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/events/${eventId}`)
      this.setState({ event: res.data })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    
    // {if(this.props.singleGigProps[0]){console.log(this.props.singleGigProps[0].artistName)}} // Data from API

    return (
      <section>

        <div className="hero-gigs-indv">
          <div className="hero-gigs-indv-txt">
            <h2>Event Info</h2>
            <h3>{this.state.event.artistName}</h3>
            <h4>{this.state.event.venue}</h4>
            <h4>{this.state.event.date}</h4>
            <h4>Doors open at: {this.state.event.doorsAt}</h4>
            <h4>About event: {this.state.event.aboutEvent} </h4>
          </div>
          <div className="hero-gigs-indv-img">
            <img src={this.state.event.posterImage} alt="logo" />  
          </div>
        </div>

        <div className="home-title">
          <h2>Comments</h2>
        </div>

      </section>
    )
  }
}

export default GigShow