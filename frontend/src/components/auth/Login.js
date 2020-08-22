import React from 'react'
import image from '../../assets/002.png'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  render() {
    const { formData } = this.state
    return (
      <section>

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
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      value={formData.password}
                    />
                  </div>
                </div>
                <div className="field">
                  <button type="submit" className="button is-fullwidth is-warning">Login</button>
                </div>
              </form>
          </div>
          <div className="form-image">
            <img src={image} alt="logo" /> 
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-text">
            <h1>Gigme</h1>
          </div>
        </div>


      </section>
    )
  }
}

export default Login