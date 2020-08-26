import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {

  state = {
    loggedIn: false
  }

  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }

  render(){
  const isLoggedIn = isAuthenticated()
  return (
  <nav className="navbar">
    <div className="nav-logo">
      <Link to="/">Gigme</Link>
    </div>
      <Link to="/gigs">Gigs</Link>
      <Link to="/create-an-event">Create an event</Link>
      {isLoggedIn ?
      <>
      <Link to="/community">Community</Link>
      <Link to="/">Blog</Link>
      <Link to="/profiles">Profile</Link>
      <Link to="/" className="navbar-item" onClick={this.handleLogout}>Log Out</Link>
      </>
      :
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
      </>
    }
    
  </nav>
  )
    }
  }

export default withRouter(Navbar)