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
        const response = await fetch("http://localhost:3000/events", {
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
        <>
            <h1>Example Flexbox Gallery</h1>

            <div>
                <Row className="ml-4 mt-4">
                    <Link to="/create-event">
                    </Link>

                </Row>
                <Dropdown className="citiesMenu" options={cities} onClick={() => {setCategory("Lefkoşa");
                  }} placeholder="Select the city" />

                {/*
                <select>
{cities.map(city => <option>city</option>)}
</select>
                
                */}
                
            </div>

            <div class="boxes">
                <div class="box">
                    <img src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
                    <h3>Ahmet Evan Narnia'da</h3><p>&nbsp;</p>
                </div>
                <div class="box">
                    <img src="https://m.media-amazon.com/images/I/71gx-y3ksXL._SS500_.jpg" alt="Sunset in Amsterdam" />

                    <h3>Frekans Shamrock'da</h3>
                    <p> Detaylar icin.. </p>
                </div>
                <div class="box">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Sign in Pioneer Square; Portland, Oregon" />
                    <h3>Portland Signpost</h3>
                    <p> ... </p>
                </div>
                <div class="box">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/love-the-architecture-01-1024x768.jpg" alt="amsterdam architecture" />
                    <h3>The architecture rocks</h3>
                    <p> ... </p>
                </div>
                <div class="box">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/sunset-1024x768.jpg" alt="beautiful sunset" />
                    <h3>Amsterdam Sunset</h3>
                    <p> ... </p>
                </div>
                <div class="box">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Portland Signpost" />
                    <h3>Portland Signpost</h3>
                    <p> ... </p>
                </div>
            </div>
        </>
    );

}
export default Programs;