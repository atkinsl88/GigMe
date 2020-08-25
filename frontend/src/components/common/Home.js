import React from 'react'
import axios from 'axios'
import icon from '../../assets/pin.png'
import icon2 from '../../assets/calendar.png'
import Map from '../gigs/Maps'
class Home extends React.Component{
  state = {
    gigs: [],
    randomChoices: []
  }
  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      // console.log(res.data)
      this.setState({ gigs: res.data })
      // console.log(this.getRandom)
      this.getRandom()
      console.log(this.state.randomChoices)
    } catch (err) {
      console.log(err)
    }
  }
  getRandom = () => {
    let currentChoices = []
    for (let i = 0; i < 3; i++) {
      const random = this.state.gigs[Math.floor(Math.random() * this.state.gigs.length)]
      console.log(random)
      currentChoices.push(random)
      // this.setState({ randomChoices: random })
      // if (random === this.state.gigs) {
      //   return this.getRandom()
      // } else {
      //   currentChoices.push(random)
      //   console.log(this.state.randomChoices)
      // }
    } 
    console.log(currentChoices)
    this.setState({ randomChoices: [...currentChoices] })
  }

  render() {

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
              <img src={name.posterImage} alt="logo" />
              <h3>{name.artistName}</h3>
              <h4>{name.aboutEvent}</h4>
              <h5>{name.date}</h5>
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
      <div id="genres" className="genres">
        <div value="pop">Pop</div>
        <div value="rock">Rock</div>
        <div value="electronic">Electronic</div>
        <div value="brunch">Brunch</div>
        <div value="metal">Metal</div>
        <div value="hiphop">Hip Hop</div>
        <div value="jazz">Jazz</div>
        <div value="world">World</div>
        <div value="ambient">Ambient</div>
        <div value="country">Country</div>
        <div value="grime">Grime</div>
        <div value="jazz-soul">Jazz / Soul</div>
      </div>
      <div className="map-icons">
        <img src={icon} alt="logo" />
        <img src={icon2} alt="logo" />
      </div><div className="mapArea">
      <Map className="map">
      </Map>
      </div>
    </div>
  </section>
  )
  }
}
export default Home