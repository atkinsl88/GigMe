import React from 'react'
import { createGig } from '../../lib/api'
import GigForm from './GigForm'

class GigNew extends React.Component {
  state = {
    formData: {
      artistName: '',
      venue: '',
      venueAddress: '',
      genre: '',
      date: '',
      doorsAt: '',
      posterImage: '',
      hasBar: '',
      latitude: '',
      longitude: '',
      aboutEvent: '',
      eventPrice: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createGig(this.state.formData)
      this.props.history.push(`/gigs/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <GigForm 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
              buttonText="Make my Gig"/> 
          </div>
        </div>
      </section>
    )
  }
}

export default GigNew