import React from 'react'
// import { getAllEvents } from '../../lib/api'
import axios from 'axios'
import GigCard from './GigCard'

class GigIndex extends React.Component {
  state = {
    events: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      this.setState({ events: res.data })
      console.log(res.data)
    } catch (err) {
      // this.props.history.push('/notfound')
      console.log(err)
    }
  }

  render() {

// console.log(this.props.gigprops) //data from the API here

    return (
      <section>

        <div className="hero-gigs">
          <div className="hero-gigs-txt">
            <h1>Gigs</h1>
          </div>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map(event => (
              <GigCard key={event._id} {...event}/>
            ))}
          </div>
        </div>

      </section>
    )
  }
}

export default GigIndex