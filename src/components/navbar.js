import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className='Navigation'>
            <Link className='Navigation1' to="/">Home</Link>
            <Link className='Navigation1' to="/aboutus">About</Link>
            <Link className='Navigation1' to="/eventspage">Events</Link>
            <Link className='Navigation1' to="/login">LogIn</Link>
            <Link className='Navigation1' to="/register">Register</Link>

        </div>
    );
};


export default Navbar;