import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Button, Card, Row } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Programs = () => {
    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState([]);

    const cities = [
        "Lefkoşa", "Girne", "Mağusa", "Güzelyurt", "İskele"
    ];

    const defatulCity = "Lefkoşa";
    const getEvent = async () => {
        const response = await fetch("http://localhost:3001/events", {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        setEvents(data.events);

    }

    React.useEffect(() => {
        getEvent()
    }, [])
    return (
        <>
            <h1>Example Flexbox Gallery</h1>

            <div>
                <Row className="ml-4 mt-4">
                    <Link to="/create-event">
                    </Link>

                </Row>
                <Dropdown className="citiesMenu" options={cities} onClick={() => {
                    setCategory("Lefkoşa");
                }} placeholder="Select the city" />

            </div>

            <div class="boxes">
                {events.map(event => {
                    return (<div class="box">
                        <img src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
                        <h3>{event.eventName}</h3><p>&nbsp;</p>
                    </div>)
                })}
            </div>
        </>
    );

}
export default Programs;