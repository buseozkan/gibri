/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./homepage.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [city, setCity] = useState(null);
  const [artist, setArtist] = useState(null);

  const cities = ["Lefkosa", "Girne", "Magusa", "Guzelyurt", "Iskele"];
  const artists = [
    "Ahmet Evan",
    "Rast",
    "Dj Privillige",
    "Eril Cambaz",
    "Reva",
    "SensiJam",
    "Bunfyah",
    "Fikri Karayel",
    "Ezgi Akgurgen",
    "Atesh",
    "MishaRoots",
    "Todds and Friends",
    "Nafiz Dolek",
    "Organic Pixel",
    "Cahit Kutrafali Trio",
    "Dj Coskuner",
    "Ogulcan Basari",
    "Dilara Ferit",
    "Osman Tugsal",
    "The Healers",
    "Zildji",
    "OneBlood",
    "Osman Tugsal",
  ];

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

  let eventsToShow = events;

  if (city) {
    eventsToShow = events.filter((event) => {
      return event.eventCity === city;
    });
  }

  if (artist) {
    eventsToShow = events.filter((event) => {
      return event.eventArtist === artist;
    });
  }

  const defaultOption = "City";
  const defaultOption2 = "Artist";

  return (
    <>
      <div>
        <div class="citiesMenu">
          <h1 className="dropdown1">Filter by City or Artist</h1>
          <Dropdown
            className="dropdown1"
            options={cities}
            onChange={(citySelected) => {
              setCity(citySelected.value);
              console.log(citySelected.value, "target");
            }}
            placeholder="Sehrinizi Secin"
            value={defaultOption}
          />
          <Dropdown
            className="dropdown1"
            options={artists}
            onChange={(artistSelected) => {
              setArtist(artistSelected.value);
              console.log(artistSelected.value, "target");
            }}
            placeholder="Artist Secin"
            value={defaultOption2}
          />
        </div>
        <div></div>
        <div class="boxes">
          {eventsToShow.map((event) => {
            return (
              <>
                <div className="box">
                  <img className="homeimg" src={event.image}></img>
                  <h3>{event.eventName}</h3>
                  <h2>{event.eventCity}</h2>
                  <h2 className="unlu">{event.eventArtist}</h2>
                  <h2>{event.eventImage}</h2>
                  <p className="eventaciklama">{event.eventDescription}</p>
                  <p className="eventaciklama"> </p>
                </div>
                <div></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
