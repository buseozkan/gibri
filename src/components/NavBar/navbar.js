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
        to="/homepage"
        activeStyle={{
          color: "gold",
        }}
      >
        Home
      </NavLink>

      <NavLink
        className="Navigation1"
        to="/aboutus"
        activeStyle={{
          color: "gold",
        }}
      >
        About
      </NavLink>
      <NavLink
        className="Navigation1"
        to="/eventspage"
        activeStyle={{
          color: "gold",
        }}
      >
        Events
      </NavLink>
      <NavLink
        className="Navigation1"
        to="/login"
        activeStyle={{
          color: "gold",
        }}
      >
        Log In
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
