import React from 'react'
// import { getAllEvents } from '../../lib/api'
import axios from 'axios'
import GigCard from './GigCard'
import { Link } from 'react-router-dom'

class GigIndex extends React.Component {
  state = {
    events: [],
    search: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      this.setState({ events: res.data })
      this.handleAllClick()
      // console.log(res.data)
    } catch (err) {
      // this.props.history.push('/notfound')
      console.log(err)
    }
  }

  handleClick = async event => {
    event.preventDefault()
    // const genre = event.target.value
    const results = this.state.events.filter(gig => (
      gig.genre === event.target.value
    ))
    // console.log(results)
    this.setState({ search: results })
  }

  handleAllClick = async event => {
    // event.preventDefault()
    console.log('hello')
    const res = await axios.get('http://localhost:3000/api/events')
    this.setState({ search: res.data })
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

        <div id="genres" className="searchGenres">
        <button onClick={this.handleAllClick}>All</button>
        <button onClick={this.handleClick} value="pop" className="searchButtons">Pop</button>
        <button onClick={this.handleClick} value="rock" className="searchButtons">Rock</button>
        <button onClick={this.handleClick} value="electronic" className="searchButtons">Electronic</button>
        <button onClick={this.handleClick} value="brunch" className="searchButtons">Brunch</button>
        <button onClick={this.handleClick} value="metal" className="searchButtons">Metal</button>
        <button onClick={this.handleClick} value="hip-hop" className="searchButtons">Hip Hop</button>
        <button onClick={this.handleClick} value="world" className="searchButtons">World</button>
        <button onClick={this.handleClick} value="ambient" className="searchButtons">Ambient</button>
        <button onClick={this.handleClick} value="country" className="searchButtons">Country</button>
        <button onClick={this.handleClick} value="grime" className="searchButtons">Grime</button>
        <button onClick={this.handleClick} value="jazz/soul" className="searchButtons">Jazz / Soul</button>
      </div>
      <div className="three-col">
        {this.state.search.map(name => {
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

        {/* <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map(event => (
              <GigCard key={event._id} {...event}/>
            ))}
          </div>
        </div> */}

      </section>
    )
  }
}

export default GigIndex