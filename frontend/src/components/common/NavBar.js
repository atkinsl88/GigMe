import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/cheeses" className="navbar-item">Cheese Index</Link>
        <Link to="/register" className="navbar-item">Register</Link>
        <Link to="/login" className="navbar-item">Log In</Link>
        <Link to="/cheeses/new" className="navbar-item">Make a new Cheese</Link>
      </div>
    </div>
  </nav>
)

export default Navbar