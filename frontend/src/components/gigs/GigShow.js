import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { createLike, createComment, deleteGig } from '../../lib/api.js'
import { isAuthenticated } from '../../lib/auth'

import { withHeaders, getSingleGig } from '../../lib/api'

class GigShow extends React.Component {

  state = {
    usersLink:[],
    event: [],
    text: '',
    likes: '',
    comments: [],
    Liked: 0,
    clicked: false,
    formData:{
      text:'',
    }
  }

  async componentDidMount() {

    try {
      const eventId = this.props.match.params.id
      const res = await getSingleGig(eventId)
      this.setState({ event: res.data })
      this.setState({ comments: res.data.comments })
      this.setState({ likes: res.data.likes })
    } catch (err) {
      console.log(err)
    }

    //! fetched all userdata to use in linking comments to separate profiles (as well as passing props)
    try {
      const resuser = await axios.get(`http://localhost:3000/api/users`, withHeaders())
      this.setState({ usersLink: resuser.data})
    } catch (err) {
      console.log(err)
    }
  }

  handleClick = async event => {
    event.preventDefault()
    const eventId = this.props.match.params.id
    try {
      await createLike(this.state.text, eventId)
      const res2 = await getSingleGig(eventId)
      this.setState({ likes: res2.data.likes })
    }
    catch (err) {
      console.log(err.response.data)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const eventId = this.props.match.params.id
    try {
      const res = await createComment(this.state.formData, eventId)
      await getSingleGig(eventId)
      this.setState({ comments: res.data.comments })
    } catch (err) {
      console.log(err.response.data) 
    }
  }

  handleFindProfile = event => {
    //! get target value, search userLinks for relevant user,
    const posterProps = [] //populate this with the items received from searching for the right user in below function
    const poster = event.target.value //clicking on button populates with the userid to find.
    //posterprops array should then be props to a new profile page for the user needed.
    console.log(poster)
  }


  handleDelete = async () => {
    const gigID = this.props.match.params.id
    try {
      await deleteGig(gigID)
      this.props.history.push('/gigs')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section>
        <div className="hero-gigs-indv">

          <div className="hero-gigs-indv-txt">
            <h2>Event Info</h2>
            <span className="gigShowArtistName">{this.state.event.artistName}</span>
            <h4>{this.state.event.venue}</h4>
            <h4>{this.state.event.date}</h4>
            <h4>Doors open at: {this.state.event.doorsAt}</h4>
            <h4>About event: {this.state.event.aboutEvent} </h4>

            {isAuthenticated(this.state.event.userId) &&
            <>
            <Link to={`/gigs/${this.state.event._id}/edit`} className="button is-warning">Edit</Link>
            <hr />
            <button onClick={this.handleDelete} className="button is-danger">Delete Event</button>
            <hr />
            <button onClick={this.handleClick} value="" className="gigLike">LIKE</button>
           
            <p>{this.state.likes.length} people have liked this event!</p>
            </> 
            }
            
          </div>

          <div className="hero-gigs-indv-img">
            <img src={this.state.event.posterImage} alt="logo" />
          </div>

        </div>

        <div className="home-title">
          <h2>Comments</h2>
        </div>

        <section className="commentEventForm">
        <form onSubmit={this.handleSubmit}>
        <textarea
                  className="textarea commentEventForm"
                  name="text"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.formData.text}
                />
        <div>
      <input type="submit" value="Submit" />
      </div>

      </form>
      </section>

        <section className="gigCommentSection">
        <div>{this.state.comments.slice(0).reverse().map(eachcomment => {
          return (
            <div key={eachcomment.createdAt} className="eventComments">
            <h2 className="indivComment"><button value={eachcomment.user._id} onClick={this.handleFindProfile}>{eachcomment.user.username}</button> - {eachcomment.text}</h2>
            </div>
          )
        })}</div>
        </section>
      </section>
    )
  }
}
export default GigShow