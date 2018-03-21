import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header className="row navbar navbar-dark bg-dark bd-navbar ">
      <h3 className="navbar-brand col-md-4 mb-0"><NavLink to="/">Shared Delivery Manager</NavLink></h3>
      <ul className="nav mr-auto">
        <li className="nav-item">
          <NavLink to="/orders"> Orders </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Navbar