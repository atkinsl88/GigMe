import React from 'react'
import { Link } from 'react-router-dom'

const GigCard = ({ name, posterImage, artistName, venue, date, eventPrice, _id }) => (

  <div className="column is-one-third-desktop is-one-third-tablet is-fullwidth">
    <Link to={`/gigs/${_id}`}>

      <div className="gig-card">

        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={posterImage} alt={name} loading="lazy" width="300" height="220" />
          </figure>
        </div>

        <div className="card-header">
          <div>
            <h4 className="gig-title">{artistName}</h4>
          </div>
          <div className="gig-content">
            <h5>{venue}</h5>
            <h5>{date}</h5>
            <h6>£{eventPrice}</h6>
          </div>
        </div>

      </div>

    </Link>

  </div>

)

export default GigCard