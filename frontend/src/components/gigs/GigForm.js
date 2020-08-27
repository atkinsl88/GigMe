import React from 'react'

const GigForm = ({ handleSubmit, handleChange, formData, buttonText }) => {

  return (
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">

              <div className="field">
                <label className="label">Artist Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Artist Name"
                    name="artistName"
                    onChange={handleChange}
                    value={formData.artistName}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Venue</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Venue"
                    name="venue"
                    onChange={handleChange}
                    value={formData.venue}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Venue Address</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Venue Address"
                    name="venueAddress"
                    onChange={handleChange}
                    value={formData.venueAddress}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Genre</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="pop"
                    name="genre"
                    onChange={handleChange}
                    value={formData.genre}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    className="date"
                    placeholder="Date"
                    name="date"
                    onChange={handleChange}
                    value={formData.date}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Doors Open</label>
                <div className="control">
                  <input
                    className="doorsAt"
                    placeholder="Time"
                    name="doorsAt"
                    onChange={handleChange}
                    value={formData.doorsAt}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Poster Image</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Image URL"
                    name="posterImage"
                    onChange={handleChange}
                    value={formData.posterImage}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Has a bar?</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Has a bar?"
                    name="hasBar"
                    onChange={handleChange}
                    value={formData.hasBar}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Latitude</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Latitude"
                    name="latitude"
                    onChange={handleChange}
                    value={formData.latitude}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Longitude</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Longitude"
                    name="longitude"
                    onChange={handleChange}
                    value={formData.longitude}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">About</label>
                <div className="control">
                  <textarea
                    className="input"
                    placeholder="About"
                    name="aboutEvent"
                    onChange={handleChange}
                    value={formData.aboutEvent}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Event Price</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Event Price"
                    name="eventPrice"
                    onChange={handleChange}
                    value={formData.eventPrice}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">{buttonText}</button>
              </div>
            </form>
  )
}

export default GigForm