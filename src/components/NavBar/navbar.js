import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Search/search";



const Navbar = () => {
  return (
    <div className="Navigation">
      <SearchBar className="SearchBar" />
      <NavLink
        className="Navigation1"
        to="/home"
        activeStyle={{
          color: "#a096a1",
        }}
      >
        <a href='./home'>Home</a>
      </NavLink>

      <NavLink
        className="Navigation1"
        to="/about"
        activeStyle={{
          color: "gold",
        }}
      >
        <a href='./about'>About</a>
      </NavLink>
      <NavLink className="Navigation1"
        to="/contact"
        activeStyle={{
          color: "gold",
        }}
      >
        <a href='./contact'>Contact Us</a>

      </NavLink>
      <NavLink
        className="Navigation1"
        to="/login"
        activeStyle={{
          color: "white",
        }}
      >
        <a href='./login'>Log In</a>
      </NavLink>
      <NavLink
        className="Navigation1"
        to="/register"
        activeStyle={{
          color: "white",
        }}
      >
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
