/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Search/search";

const Navbar = () => {
  return (
    
    <div className="Navigation">
      <SearchBar className="SearchBar" />
      <NavLink className="Navigation1" to="/home">
        Home
      </NavLink>

      <NavLink className="Navigation1" to="/about">
        About
      </NavLink>
      <NavLink className="Navigation1" to="/contact">
        Contact Us
      </NavLink>
      <NavLink className="Navigation1" to="/login">
        Log In
      </NavLink>
      <NavLink className="Navigation1" to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
