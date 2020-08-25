import React from 'react'
// import image from '../../assets/001.png'
import axios from 'axios'

class GigShow extends React.Component {
  state = {
    event: [],
    likes: [],
    comments: [],
    Liked: 0,
    formData:{
      comment:'',
    }
  }

  async componentDidMount() {
    try {
      const eventId = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/events/${eventId}`)
      this.setState({ event: res.data })
      console.log(res.data)
      console.log(this.state.event.likes.length)
      this.setState({ likes: res.likes.length })
      console.log(this.state.event.likes)
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
    // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    // console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.formData.comment)}

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
        <form>

        <textarea
                  className="textarea"
                  name="comment"
                  value={this.state.formData.comment}
                  onChange={this.handleChange}
                />
        <div>
      <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </div>
        </form>

      </section>
    )
  }
}

export default GigShow