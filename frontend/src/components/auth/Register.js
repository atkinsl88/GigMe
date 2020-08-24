import React from 'react'
import Select from 'react-select'
import { registerUser } from '../../lib/api'
// import Axios from 'axios'

class Register extends React.Component {

  state = {
    formData: {
      username: '',
      email: '',
      genres: '',
      aboutMe: '',
      mySite: '',
      profilePicture: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  options = [
    { value: 'pop', label: 'pop' },
    { value: 'rock', label: 'rock' },
    { value: 'metal', label: 'metal' },
    { value: 'electronic', label: 'electronic' },
    { value: 'world', label: 'world' },
    { value: 'grime', label: 'grime' },
    { value: 'jazz/soul', label: 'jazz/soul' },
    { value: 'brunch', label: 'brunch' },
    { value: 'hip hop', label: 'hip hop' },
    { value: 'country', label: 'country' },
    { value: 'ambient', label: 'ambient' }
  ]

  //! this function is blatantly untouched JackCode. Would appreciate some help with writing both submit and onchange.

  handleChange = event => {
    // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    // console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await registerUser(this.state.formData)
      this.props.history.push('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label">User Name</label>
        <input
          // type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.formData.username}
        />
        <label className="label">Email</label>
      <input
          type="text"
          name="email"
          value={this.state.formData.email}
          onChange={this.handleChange}
        />
        <label className="label">Website</label>
      <input
          type="text"
          name="genres"
          value={this.state.formData.genre}
          onChange={this.handleChange}
        />
        <label className="label">link to profile picture</label>
      <input
          type="text"
          name="profilePicture"
          value={this.state.formData.profilePicture}
          onChange={this.handleChange}
        />
        <label className="label">Your favourite genre!</label>
              <div className="control">
                <Select options={this.options}
                />
              </div>

        <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  value={this.state.formData.aboutMe}
                  onChange={this.handleChange}
                />
        </div>
        <label className="label">password</label>
        <input
          type="text"
          name="password"
          value={this.state.formData.password}
          onChange={this.handleChange}
        />
        <label className="label">confirm password</label>
      <input
          type="text"
          name="passwordConfirmation"
          value={this.state.formData.passwordConfirmation}
          onChange={this.handleChange}
        />
        <p>
      <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </p>
      </form>
    )
  }
}

export default Register
