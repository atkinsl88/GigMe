import React from 'react'
import image from '../../assets/001.png'

class GigCard extends React.Component {
  render() {
    return (
      <section>

        <div className="hero-gigs-indv">
          <div className="hero-gigs-indv-txt">
            <h2>Event Info</h2>
            <h3>Spinal Tap</h3>
            <h4>Venue: The Dev Camden, 33 Kentish Town Rd</h4>
            <h4>Date: 26/09/2020</h4>
            <h4>Doors open at: 1900</h4>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere dignissim quam quis lacinia. Aenean in lorem nisi. Nullam pharetra auctor turpis, vel tincidunt massa ultricies eleifend. Suspendisse sed risus nulla. Aenean at purus lacus. Phasellus sagittis magna et vulputate rutrum. </h4>
          </div>
          <div className="hero-gigs-indv-img">
            <img src={image} alt="logo" />  
          </div>
        </div>

      <div className="home-title">
        <h2>Comments</h2>
      </div>

      </section>
    )
  }
}

export default GigCard