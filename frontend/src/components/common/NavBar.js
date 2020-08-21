import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  <nav>
    <div className="nav-logo">
      <Link to="/">Gigme</Link>
    </div>
    <div className="nav-lft">
      <Link to="/">Gigs</Link>
      <Link to="/">Community</Link>
      <Link to="/">Blog</Link>
    </div>
    <div className="nav-rgt">
      <Link to="/">Profile</Link>
      <Link to="/">Login</Link>
      <Link to="/">Sign Up</Link>
    </div>
  </nav>
)

export default Navbar