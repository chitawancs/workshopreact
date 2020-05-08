import React from 'react'
import { NavLink } from "react-router-dom";
export default function HeaderLogin() {
  var userid = localStorage.getItem('MyUser')
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
          <li class = "nav-item">
            <NavLink activeStyle = {{color : 'blue'}} className="nav-link" to="/home"><h5>Home</h5></NavLink>
            
            </li>

            <li class = "nav-item">
            <NavLink activeStyle = {{color : 'blue'}} className="nav-link" to="/product"><h5>Product</h5></NavLink>  
            </li>
            <li class = "nav-item">
            <NavLink activeStyle = {{color : 'blue'}} className="nav-link" to='/myproduct'><h5>MyProduct</h5></NavLink>
            </li>
            <li class = "nav-item">
            <NavLink activeStyle = {{color : 'blue'}} className="nav-link" to={'/profile/'+userid}><h5>Profile</h5></NavLink>
            </li>

          <li class = "nav-item">
            <NavLink activeStyle = {{color : 'red'}} className="nav-link" to="/"><h5>Logout</h5></NavLink>  
            </li>
           
          
          </div>
        </div>
      </nav>
        </div>
    )
}
