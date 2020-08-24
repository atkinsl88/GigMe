import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
const GigCard = ({ name, image, artistName, venue, date, eventPrice, _id }) => (
=======
const GigCard = ({ name, posterImage, artistName,venue, date, eventPrice, _id }) => (
>>>>>>> c09e9ce24bc7b9ad0c5fd689a9c165a7a7750862

  <div className="column is-one-quarter-desktop is-one-third-tablet is-fullwidth">
    <Link to={`/gigs/${_id}`}>

      <div className="card">

        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={posterImage} alt={name} loading="lazy" width="300" height="220" />
          </figure>
        </div>

        <div className="card-header">
          <h4 className="card-header-title">{artistName}</h4>
        </div>

        <div className="card-content">
          <h5 className="">{venue}</h5>
          <h5 className="">{date}</h5>
          <h5 className="">£{eventPrice}</h5>
        </div>

      </div>

    </Link>

  </div>

)

export default GigCard