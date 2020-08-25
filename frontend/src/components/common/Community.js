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

        <div className="chat-area">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="messages"
              onChange={this.handleChange}
              value={this.state.formData.messages}
            />
            <div className="field">
                  <button type="submit" className="button is-link input">Send</button>
                </div>
          </form>
        </div>

      </section>
    )
  }
}

export default Community