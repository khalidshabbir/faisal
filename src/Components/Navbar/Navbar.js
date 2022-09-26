import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <div>
           <nav className="navbar navbar-expand-lg py-4 navigation header-padding " id="navbar">
                    <div className="container-fluid">
                    <NavLink className="nav-link" to="/">
                            <img src="images/logo.png" alt className="img-fluid" />
                        </NavLink>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarsExample09">
                            <ul className="navbar-nav m-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about-us">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact</NavLink></li>
                            </ul>
                            <NavLink to="/" className="btn btn-solid-border d-none d-lg-block" onClick={() => {navigator.clipboard.writeText(+92235689741); alert("Phone number is copied : +92235689741")}}>+922344556677 </NavLink>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar