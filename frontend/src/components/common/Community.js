import React from 'react'

class Community extends React.Component {
  state = {
    formData: {
      messages: ''
    }
    
  }

  handleChange = event => {
    const formData = { ...this.state.mesaages, [event.target.name]: event.target.value }
    console.log(this.state.formData.messages)
    this.setState({ formData })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('submit now')
  }

  render() {
    return (
      <section>

        <div className="hero-community">
          <div className="hero-community-txt">
            <h1>Community</h1>
          </div>
        </div>

        <div className="message-box">

        </div>

        <div className="chat-area">
          <div className="message-input">
            <div className="form-input">
              <form onSubmit={this.handleSubmit}>
                <div className="fields">
                  <input
                  type="text"
                  name="messages"
                  onChange={this.handleChange}
                  value={this.state.formData.messages}
                />
                </div>
                <div className="button">
                  <button type="submit" className="button is-link input">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Community

// className="button is-link input"