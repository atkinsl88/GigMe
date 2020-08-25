import React from 'react'
// import image from '../../assets/001.png'
import axios from 'axios'
import { createComment } from '../../lib/api.js'
<<<<<<< HEAD
const baseUrl = 'http://localhost:3000/api'
=======

const baseUrl = 'http://localhost:3000/api'

>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
class GigShow extends React.Component {

  state = {
    event: [],
    likes: [],
    comments: [],
    Liked: 0,
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
      this.setState({ likes: res.likes.length })
      this.handleClick()
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

  handleClick = (e) => {
    // const likesArray = []
    let Liked = null
    if (e.target.value === 'like') {
      this.state.likes.push('like')
      // likesArray.push('likes')
      // this.setState({ likes: [...likesArray] })
      console.log(this.state.likes)
      Liked = this.state.likes.length + 1
      this.setState({ Liked : Liked})
    } 
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    console.log(this.state.formData.text)
    this.setState({ formData })
    }
<<<<<<< HEAD
=======
  
>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306

  handleSubmit = async event => {
    event.preventDefault()
    // const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const eventId = this.props.match.params.id
    console.log(`${baseUrl}/events/${eventId}`)
    try {
    // const eventId = this.props.match.params.id
    const res = await createComment(this.state.formData, eventId)
    console.log(this.state.formData.text)}
    catch (err) {
      console.log(err.response.data)
    }
  }
<<<<<<< HEAD
=======
  
>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306

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
            <button onClick={this.handleClick} value="like">Like</button>
            <p>{this.state.likes.length}</p>
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
<<<<<<< HEAD
=======
        
>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
        <textarea
                  className="textarea commentEventForm"
                  name="text"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.formData.text}
<<<<<<< HEAD
=======
                  
>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
                />
        <div>
      <input type="submit" value="Submit" />
      </div>
      </form>
      </section>
<<<<<<< HEAD
        <section className="gigCommentSection">
=======
        
    
        <section className="gigCommentSection">

>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
        <div>{this.state.comments.map(eachcomment => {
          return (
            <div key={eachcomment.createdAt} className="eventComments">
            <h2 className="indivComment">{eachcomment.user.username} - {eachcomment.text}</h2>
            </div>
          )
        })}</div>
        </section>
<<<<<<< HEAD
=======

>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
      </section>
    )
  }
}

export default GigShow