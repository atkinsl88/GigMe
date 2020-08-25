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
      <section>
        <div className="hero-gigs-indv text-center">
          <div className="hero-gigs-indv-txt">
            <h2>Sign Up</h2>
            <h4>Register with GigMe below!</h4>
          </div>
        </div>

        <div className="form-area">
          <div className="form register-form">
            <form onSubmit={this.handleSubmit} className="box">
              <div className="field">
                <label className="label">username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={this.handleChange}
                    value={this.state.formData.username}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">email</label>
                <div className="control">
                  <input
                  className="input"
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.formData.password}
                    onChange={this.handleChange}
                  />
                  
                </div>
              </div>

              <div className="field">
                <label className="label">password confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="password"
                    name="passwordConfirmation"
                    value={this.state.formData.passwordConfirmation}
                    onChange={this.handleChange}
                   />  
                </div>
              </div>

              <div className="field">
                <label className="label">website</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="genres"
                    placeholder="www.aboutme.com"
                    value={this.state.formData.genre}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">link to profile picture</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="profilePicture"
                    placeholder="www.profpic.com"
                    value={this.state.formData.profilePicture}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">pick your favourite genre</label>
                <div className="control">
                  <div className="control">
                  <Select options={this.options}
                  />
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">bio</label>
                <div className="control">
                  <textarea
                    className="textarea input"
                    name="description"
                    value={this.state.formData.aboutMe}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </section>
      

      // <div className="field">
      //   <label className="label">Username</label>
      //   <div className="control">

      //   </div>
      // </div>
        
        
      //   <label className="label">Email</label>
      
      //   <label className="label">Website</label>
      
      //   <label className="label">link to profile picture</label>
      // <input
      //     type="text"
      //     name="profilePicture"
      //     value={this.state.formData.profilePicture}
      //     onChange={this.handleChange}
      //   />
      //   <label className="label">Your favourite genre!</label>
              

      //   <label className="label">Description</label>
      //         <div className="control">
      //           <textarea
      //             className="textarea"
      //             name="description"
      //             value={this.state.formData.aboutMe}
      //             onChange={this.handleChange}
      //           />
      //   </div>
      //   <label className="label">password</label>
      //   <input
      //     type="text"
      //     name="password"
      //     value={this.state.formData.password}
      //     onChange={this.handleChange}
      //   />
      //   <label className="label">confirm password</label>
      // <input
      //     type="text"
      //     name="passwordConfirmation"
      //     value={this.state.formData.passwordConfirmation}
      //     onChange={this.handleChange}
      //   />
      //   <p>
      // <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      // </p>
      // </form>
    )
  }
}

export default Register
