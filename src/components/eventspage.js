import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Button, Card, Row } from 'react-bootstrap';
import Dropdown from 'react-dropdown';

const Programs = () => {
    const [events, setEvents] = React.useState([])
    const cities = [
        'magusa', 'lefkosa', 'girne'
    ];
    const getEvent = async () => {
        const response = await fetch("http://localhost:3000/eventspage", {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const dat = await response.json()
        setEvents(dat);
    }

    React.useEffect(() => {
        getEvent()
    }, [])
    return (
        <div className="dropwdown">
            <Row className="ml-4 mt-4">
                <Link to="/create-event">
                </Link>

            </Row>
            <select id="searchresults4" name="primarysport">
                <option value="">Select city</option>
                <option>Magusa</option>
                <option>Lefkosa</option>
                <option>Girne</option>
            </select>

            <div class="boxes">
                    <div class="box box1">
                        <img src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
                        <h3>Ahmet Evan Narnia'da</h3><p>&nbsp;</p>
                    </div>
                    <div class="box box2">
                        <img src="https://m.media-amazon.com/images/I/71gx-y3ksXL._SS500_.jpg" alt="Sunset in Amsterdam" />

                        <h3>Frekans Shamrock'da</h3>
                        <p> Detaylar icin.. </p>
                    </div>
                    <div class="box box3">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Sign in Pioneer Square; Portland, Oregon" />
                        <h3>Portland Signpost</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box4">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/love-the-architecture-01-1024x768.jpg" alt="amsterdam architecture" />
                        <h3>The architecture rocks</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box5">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/sunset-1024x768.jpg" alt="beautiful sunset" />
                        <h3>Amsterdam Sunset</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box6">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Portland Signpost" />
                        <h3>Portland Signpost</h3>
                        <p> ... </p>
                    </div>
                </div>
        </div>

    );

}
export default Programs;

/*<button className="Login-Button "
                type="submit">Host an Event</button>

            <button className="Login-Button2 "
                type="submit"> Attend an Event</button>
*/