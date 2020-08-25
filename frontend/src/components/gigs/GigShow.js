import React from 'react'
// import image from '../../assets/001.png'
import axios from 'axios'
import { createComment } from '../../lib/api.js'

import { createLike } from '../../lib/api.js'

const baseUrl = 'http://localhost:3000/api'
class GigShow extends React.Component {

  state = {
    event: [],
    text: '',
    likes: '',
    comments: [],
    Liked: 0,
    // clicked: false,
    formData:{
      text:'',
    }
  }
  async componentDidMount() {

    try {
      const eventId = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/events/${eventId}`)
      this.setState({ event: res.data })
      console.log(res.data)
      this.setState({ comments: res.data.comments })
      this.setState({ likes: res.data.likes })
    } catch (err) {
      console.log(err)
    }
  }
  async componentDidUpdate() {
    try {
    } catch (err) {
      console.log(err)
    }
  }

  handleClick = async event => {
    // if (this.state.clicked=false){
    // event.preventDefault()
    const eventId = this.props.match.params.id
    // console.log(`${baseUrl}/events/${eventId}`)
    try {const res = await createLike(this.state.text, eventId)
    // this.setState({ clicked: true })
    // console.log(this.state.clicked)
    const res2 = await axios.get(`http://localhost:3000/api/events/${eventId}`)
    this.setState({ likes: res2.data.likes })}
    catch (err) {
      console.log(err.response.data)
    }
  }
//}

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    console.log(this.state.formData.text)
    this.setState({ formData })
    
    }
  handleSubmit = async event => {
    event.preventDefault()
    // const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const eventId = this.props.match.params.id
    console.log(`${baseUrl}/events/${eventId}`)
    try {
    const res = await createComment(this.state.formData, eventId)
    console.log(this.state.formData.text)
    const res3 = await axios.get(`http://localhost:3000/api/events/${eventId}`)
    this.setState({ comments: res.data.comments })
  
  }
    catch (err) {
      console.log(err.response.data)
    }
  }
  render() {
    // {if(this.props.singleGigProps[0]){console.log(this.props.singleGigProps[0].artistName)}} // Data from API
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
            <button onClick={this.handleClick} value="" className="gigLike">LIKE</button>
            <div>
            <p>{this.state.likes.length} people have liked this event!</p>
            </div>
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
        <div>{this.state.comments.map(eachcomment => {
          return (
            <div key={eachcomment.createdAt} className="eventComments">
            <h2 className="indivComment">{eachcomment.user.username} - {eachcomment.text}</h2>
            </div>
          )
        })}</div>
        </section>
      </section>
    )
  }
}
export default GigShow