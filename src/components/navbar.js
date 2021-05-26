import React from 'react';
import {  NavLink, Link } from "react-router-dom";
import './navbar.css';
import './eventspage';
 



const Navbar = () => {
    return (
        <div className='Navigation'>
            <NavLink className='Navigation1' to="/homepage">Home</NavLink>
            <NavLink className='Navigation1' to="/aboutus">About</NavLink>
            <NavLink className='Navigation1' to="/eventspage">Events</NavLink>
            <NavLink className='Navigation1' to="/login">LogIn</NavLink>
            <NavLink className='Navigation1' to="/register">Register</NavLink>

        </div>
    );
};


export default Navbar;