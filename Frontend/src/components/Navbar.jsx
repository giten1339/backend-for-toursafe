// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>TourSafe </h2>
      </div>

      <ul>
        <li>
          <NavLink to="/" className="nav-link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className="nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
