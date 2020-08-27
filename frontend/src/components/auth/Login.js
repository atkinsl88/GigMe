import React from 'react'
import image from '../../assets/002.png'
import { loginUser } from '../../lib/api'
import { setToken } from "../../lib/auth"

class Login extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: ''
    },
    error: false
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: false })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log('submit ready')
    try {
      const res = await loginUser(this.state.formData)
      console.log(res.data.token)
      setToken(res.data.token)
      this.props.history.push('/')
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {
    // const { formData } = this.state
    return (
      <section className="login">

        <div className="hero-gigs-indv">
          <div className="hero-gigs-indv-txt">
            <h2>Login</h2>
            <h4>Login to your account.</h4>
          </div>
        </div>

        <div className="form-area">
          <div className="form">

            <form onSubmit={this.handleSubmit} className="box">

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="username"
                      name="username"
                      onChange={this.handleChange}
                      value={this.state.formData.username}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className={`input ${this.state.error ? 'is-danger': '' }`}
                      placeholder="email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.formData.email}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className={`input ${this.state.error ? 'is-danger' : ''}`}
                      placeholder="password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.formData.password}
                    />
                  </div>
                </div>
                {this.state.error && <small className="help is-danger">Sorry, your credentials were incorrect</small>}

                <div className="field">
                  <button 
                    disabled={!this.state.formData.email || !this.state.formData.password}
                    type="submit" 
                    className="button is-fullwidth is-warning">
                    Login
                  </button>
                </div>
                
              </form>
          </div>
          <div className="form-image">
            <img src={image} alt="logo" /> 
          </div>
        </div>

      </section>
    )
  }
}

export default Login