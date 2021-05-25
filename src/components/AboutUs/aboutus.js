import React, { useState } from "react";

import {
    Route,
    NavLink,
    Switch,
    Link,
    HashRouter
} from "react-router-dom";

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <h1>biz kimiz acaba</h1>
                <li>Buse</li>
                <li>Ahmet M.</li>
                <li>Ahmet A.</li>
                {/*</div>
            <div>
            <form className="contactUs">
                <h1>Contact Us</h1>
                <label>Name<label>
                    <input placeholder="name"></input>
                    <label>Email</label>
                    <input placeholder="email"></input>
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
            </form>
            </div> */}
            </div>
        )
    };
};

export default AboutUs;
