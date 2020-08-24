import React from 'react'
import axios from 'axios'
import image from '../../assets/001.png'
import image2 from '../../assets/003.png'
import image3 from '../../assets/004.png'
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
        <div className="three-col-event">
          <img src={image} alt="logo" />
          <h3>{this.state.randomChoices.map(name => {
              return <p key={name.id}>{name.artistName}</p>
          })}</h3>
          {/* <h3>{this.state.randomChoices[0].artistName}</h3> */}
          <h4>Vocalist and Guitarist from local band Third Dart returns to the hot box for a solo show.</h4>
          <div className="three-col-event-info">
            <div>
              <h5>26/09/2020, 7:00pm</h5>
            </div>
            <div>
              <h6>London</h6>
            </div>
          </div>
        </div>
        <div className="three-col-event">
          <img src={image2} alt="logo" />
          <h3>Lady Gaga</h3>
          <h4>Rough Trade Shops are extremely excited to present this Zoom hosted virtual event.</h4>
          <div className="three-col-event-info">
            <div>
              <h5>30/09/2020, 7:00pm</h5>
            </div>
            <div>
              <h6>London</h6>
            </div>
          </div>
        </div>
        <div className="three-col-event">
          <img src={image3} alt="logo" />
          <h3>Spinal Tap</h3>
          <h4>Vocalist and Guitarist from local band Third Dart returns to the hot box for a solo show.</h4>
          <div className="three-col-event-info">
            <div>
              <h5>26/09/2020, 7:00pm</h5>
            </div>
            <div>
              <h6>London</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="links-home">
      <div className="home-title">
        <h2>Links</h2>
      </div>
      <div className="links-boxes">
        <div className="links-boxes-lft">
          <h2>All Gigs</h2>
        </div>
        <div className="links-boxes-rgt">
          <h2>Community</h2>
        </div>
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