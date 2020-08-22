import React from 'react'
import image from '../../assets/001.png'
import icon from '../../assets/pin.png'
import icon2 from '../../assets/calendar.png'

const Home = () => (

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
        <div className="three-col-event">
          <img src={image} alt="logo" />
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
        <div className="three-col-event">
          <img src={image} alt="logo" />
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
      </div>
      <div className="map">
      </div>
    </div>


    <div className="footer-main">
      <div className="footer-text">
        <h1>Gigme</h1>
      </div>
    </div>

  </section>
  
)

export default Home