import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
          color: "gold",
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
      <NavLink
        className="Navigation1"
        to="/login"
        activeStyle={{
          color: "gold",
        }}
      >
        <a href='./login'>Log In</a>
      </NavLink>
      <NavLink
        className="Navigation1"
        to="/register"
        activeStyle={{
          color: "gold",
        }}
      >
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
