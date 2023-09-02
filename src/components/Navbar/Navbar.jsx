import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        AfriCare
      </h1>
      <div className="navbar-links">
        <Link className="links" to="/">Home</Link>
        <Link  className="links" to="/about">About</Link>
        <Link  className="links" to="/services">Services</Link>
        <Link  className="links" to="/contact">Contact</Link>
      </div>
      <div className="nav-buttons">
        <button>
          <Link className="links" to="/login">Login</Link>
        </button>
        <button>
          <Link className="links" to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
