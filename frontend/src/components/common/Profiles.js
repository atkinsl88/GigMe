import React from 'react'
import axios from 'axios'
import Select from 'react-select'

import { setToken } from '../../lib/auth'


class Profiles extends React.Component{

  state = {
    profiles: [{}]
  }

  async componentDidMount() {
    try {
      const userId = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/api/profiles/${userId}`)
      this.setState({ profiles: res.data})
      console.log(res.data)
      setToken(res.data.token)
      console.log();
    } catch (err) {
      // this.props.history.push('/notfound')
      console.log(err)
    }
  }

  render(){

    return(
      <section>

        
      <div className="hero-gigs-indv text-center">
          <div className="hero-gigs-indv-txt">
            <h2>{this.state.profiles.username}</h2>
            <h4>Welcome to your Profile Page!</h4>
          </div>
        </div>

        <div className='wrapper-crikey'>

        <div>
            <img src={this.state.profiles.profilePicture} alt='prof-pic'/>
        </div>

        <div>
        <div className="form-area2">
          <div className="form register-form">
            <form onSubmit={this.handleSubmit} className="box">
              <div className="field">
                <label className="label">Your username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="username"
                    // onChange={this.handleChange}
                    value={this.state.profiles.username}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Your email</label>
                <div className="control">
                  <input
                  className="input"
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.profiles.email}
                    // onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Your website</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="genres"
                    placeholder="www.aboutme.com"
                    value={this.state.profiles.mySite}
                    // onChange={this.handleChange}
                  />
                </div>
              </div>

              

              <div className="field">
                <label className="label">Your favourite genre</label>
                <div className="control">
                  <div className="control">
                  <input 
                  className="input"
                  type="text"
                  name="genres"
                  placeholder="genre"
                  value={this.state.profiles.genres}
                  />
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <textarea
                    className="textarea input"
                    name="description"
                    value={this.state.profiles.aboutMe}
                    // onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">confirm changes</button>
              </div>

            </form>
          </div>
        </div>
        </div>
        </div>

      </section>
    )
  }
}

export default Profiles