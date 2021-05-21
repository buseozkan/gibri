import React, { Component } from "react";
import {Link} from "react-router-dom";
import AboutUs from "./aboutus";

class Home extends Component {
  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About</Link>
            <Link to="/eventspage">Events</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>

            
        </div>
    );
  }
}
 
export default Home;