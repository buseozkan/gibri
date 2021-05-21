import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Button, Card, Row } from 'react-bootstrap';

const Programs = () => {
    const [events, setEvents] = React.useState([])
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
        <Container>
            <Row className="ml-4 mt-4">
                <Link to="/create-event">
                    <Button variant="danger" className="ml-3">Create event</Button>
                </Link>
            </Row>

        </Container>
    );

}
export default Programs;