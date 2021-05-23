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
        <div>
            <Row className="ml-4 mt-4">
                <Link to="/create-event">
                </Link>
                
            </Row>
            <Dropdown options={cities} placeholder="Select the city" />
        </div>
     
    );

}
export default Programs;

/*<button className="Login-Button "
                type="submit">Host an Event</button>

            <button className="Login-Button2 "
                type="submit"> Attend an Event</button>
*/