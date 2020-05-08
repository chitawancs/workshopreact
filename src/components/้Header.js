import React from 'react'
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">
          MEEH
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink activeStyle={{ color: 'blue' }} className="nav-link" to="/login"><h5>Login</h5></NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeStyle={{ color: 'blue' }} className="nav-link" to="/register"><h5>Register</h5></NavLink>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}
