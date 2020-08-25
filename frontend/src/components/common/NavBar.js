import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  <nav>
    <div className="nav-logo">
      <Link to="/">Gigme</Link>
    </div>
    <div className="nav-lft">
      <Link to="/gigs">Gigs</Link>
      <Link to="/community">Community</Link>
      <Link to="/">Blog</Link>
    </div>
    <div className="nav-rgt">
      <Link to="/profiles">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  </nav>
)

export default Navbar