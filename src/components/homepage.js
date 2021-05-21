import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About</Link>
                <Link to="/eventspage">Events</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/register">Register</Link>

                <button className="Login-Button "
                    type="submit">Host an Event</button>

                <button className="Login-Button2 "
                    type="submit"> Attend an Event</button>

            </div>

        );
    }
}

export default Home;