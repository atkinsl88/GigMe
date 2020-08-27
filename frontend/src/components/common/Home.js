import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Map from '../gigs/Maps'
import GigCalendar from '../gigs/GigCalendar'

class Home extends React.Component{

  state = {
    gigs: [],
    randomChoices: [],
    search: []
  }
  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      // console.log(res.data)
      this.setState({ gigs: res.data })
      // console.log(this.getRandom)
      this.getRandom()
      // console.log(this.state.randomChoices)
    } catch (err) {
      console.log(err)
    }
  }

  getRandom = () => {
    let currentChoices = []
    for (let i = 0; i < 5; i++) {
      const random = this.state.gigs[Math.floor(Math.random() * this.state.gigs.length)]
      if(!currentChoices.includes(random) && (currentChoices.length < 3)){
      currentChoices.push(random)}
    }
    this.setState({ randomChoices: [...currentChoices] })
    console.log(currentChoices)
  }

  handleClick = async event => {
    event.preventDefault()
    const genre=event.target.value
    const results = this.state.gigs.filter(gig => (
      gig.genre === event.target.value
    ))
    // console.log(results)
    this.setState({ search: results})
  }

  render() {

    // console.log(this.state.gigs)

    // if (!this.state.randomChoices) return

    return(

  <section>
    <div className="hero-home">
      <div className="hero-home-txt">
        <h1>Find concerts in your area</h1>
      </div>
    </div>
    <div className="featured-home">
      <div className="home-title">
        <h2>Featured Events</h2>
      </div>

      <div className="three-col">
        {this.state.randomChoices.map(name => {
          return (
            <div className="three-col-content" key={name.id}>
              <div>
                <img src={name.posterImage} alt="logo" />
              </div>
              <div>
                <h3>{name.artistName}</h3>
                <h4>{name.aboutEvent}</h4>
                <h5>{name.date}</h5>
                <Link to={`/gigs/${name._id}`} className="button">Find out more</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className="links-home">
      <div className="home-title">
        <h2>Links</h2>
      </div>
      <div className="links-boxes">
          <a href="/gigs" className="links-boxes-lft">
            <h2>All Gigs</h2>
          </a>
          <a href="/community" className="links-boxes-rgt">
            <h2>Community</h2>
          </a>
      </div>
    </div>
    <div className="map-home">
      <div className="home-title">
        <h2>Search Events</h2>
      </div>
      <div id="genres" className="searchGenres">
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
      
      <div className="mapArea">
        <Map className="map">
        </Map>
      </div>

      <div className="calendarArea">
        <GigCalendar className="calendar">
        </GigCalendar>
      </div>

    </div>
  </section>
  )
  }
}
export default Home