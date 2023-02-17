import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navigation container">
      <div className="nav-brand">Arjunsingh Rajput</div>
      <ul className="list-non-bullet nav-pills">
        <li className="list-item-inline">
          <NavLink className="link " to="/">Home</NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink className="link" to="/projects">Projects</NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink className="link" to="/blogs">Blogs</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar