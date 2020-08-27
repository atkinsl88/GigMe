import React from 'react'
import axios from 'axios'
// import Select from 'react-select'
import { Link } from 'react-router-dom'

import { getUserId } from '../../lib/auth'
import { withHeaders } from '../../lib/api'

class Profiles extends React.Component{

  state = {
    profiles: [],
    createdEvents: []
  }

  async componentDidMount() {
    const userId = getUserId
    try {
      const res = await axios.get(`http://localhost:3000/api/profiles/${userId}`, withHeaders())
      this.setState({ profiles: res.data, createdEvents: res.data.createdEvents})
    } catch (err) {
      this.props.history.push('/notfound')
      console.log(err)
    }
  }

  render(){

    return(
      <section>
        
        <div className="hero-gigs-indv text-center">
          <div className="hero-gigs-indv-txt">
            <h2>{this.state.profiles.username}</h2>
            <h4>Welcome to your Profile Page!</h4>
          </div>
        </div>

        <div className='wrapper-crikey'>
          <div className="profile-info">
            <img src={this.state.profiles.profilePicture} alt="profpic"></img>
          </div>
          <div className="profile-info">
            <h2>{this.state.profiles.username}</h2>
          </div>
          <div className="profile-info">
            <h2>{this.state.profiles.email}</h2>
          </div>
          <div className="profile-info">
            <h2>{this.state.profiles.mySite}</h2>
          </div>
          <div className="profile-info">
            <h2>{this.state.profiles.genres}</h2>
          </div>
          <div className="profile-info">
            <h2>{this.state.profiles.aboutMe}</h2>
          </div>
          <div className="createdEventprofile">
          <p>Created Events!</p>
          <div>{this.state.createdEvents.map(event => {
            return <div key={event._id}>
              <p>{event.artistName}</p>
              <img src={event.posterImage} alt="img"></img>
              <p>{event.venue}</p>
              <p>{event.date}</p>
              <Link to={`/gigs/${event._id}`}>Find out more</Link>
            </div>
            })}
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Profiles