import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header className="row navbar navbar-dark bg-dark bd-navbar ">
      <h3 className="navbar-brand mb-0 col-4"><NavLink to="/">Delivery Manager</NavLink></h3>
      <ul className="nav ml-auto">
        <li className="nav-item">
          <NavLink to="/orders"> הזמנות </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Navbar