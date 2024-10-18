import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap CSS and Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap JS for dropdown and toggler functionality
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#7E1518' }}>
      <div className="container">

        {/* Navbar Brand */}
        <Link className="navbar-brand text-white fw-bolder" to="/">Navbar</Link>

        {/* Toggler Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-5 gap5 fw-bolder">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/collections">Collections</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Cart Icon on the Right */}
        <form className="d-flex align-items-center gap-3">
          <i className="bi bi-cart fs-4 text-white"></i>
          <button className="btn btn-outline-light" type="button">
            Login
          </button>
          <button className="btn btn-outline-light" type="button">
            Sign Up
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
