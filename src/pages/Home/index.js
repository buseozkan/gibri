/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import { Col, Container, Button, Card, Row } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./homepage.css";

const Programs = () => {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState([]);

  const cities = ["Lefkosa", "Girne", "Magusa", "Guzelyurt", "Iskele"];

  const getEvent = async () => {
    const response = await fetch("http://localhost:3001/events", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvents(data.events);
  };

  React.useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <h1>Events</h1>
      <div class="citiesMenu">
        <Dropdown
          className="citiesMenu"
          options={cities}
          onClick={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Sehrinizi secin"
          value={cities}
        />
      </div>

      <div class="boxes">
        {events.map((event) => {
          return (
            <div class="box">
              <img src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
              <h3>{event.eventName}</h3>
              <p>&nbsp;</p>
              <h2>{event.eventCity}</h2>
              <p>{event.eventDescription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Programs;
