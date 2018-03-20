import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Orders extends Component {
  render() {

    return (
      <header className="row navbar navbar-dark bg-dark bd-navbar ">
        <h3 className="navbar-brand col-md-4 mb-0">Shared Delivery Manager</h3>
        <ul className="nav mr-auto">
          <li className="nav-item">
            <NavLink to="/orders"> Orders </NavLink>
          </li>
        </ul>
      </header>
    )
  }

}
export default Orders