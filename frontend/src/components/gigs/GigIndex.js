import React from 'react'
import { getAllGigs } from '../../lib/api'
import axios from 'axios'
import GigCard from './GigCard'

class GigIndex extends React.Component {
  state = {
    events: [],
    search: []
  }

  async componentDidMount() {
    try {
      const res = await getAllGigs()
      this.setState({ events: res.data })
      this.handleAllClick()
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
    this.setState({ search: results })
  }

  handleAllClick = async event => {
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
            <div className="three-col-content" key={name._id}>
              <GigCard key={name._id} {...name}/>
            </div>
          )
        })}
      </div>

      </section>
    )
  }
}

export default GigIndex