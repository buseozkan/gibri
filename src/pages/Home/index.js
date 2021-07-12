/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./homepage.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [city, setCity] = useState(null);

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

  let eventsToShow = events;

  if (city) {
    eventsToShow = events.filter((event) => {
      return event.eventCity === city;
    });
  }

  console.log(city);

  return (
    <>
      <div>
        <div class="citiesMenu">
          <Dropdown
            className="citiesMenu"
            options={cities}
            onChange={(citySelected) => {
              setCity(citySelected.value);
              console.log(citySelected.value, "target");
            }}
            placeholder="Sehrinizi Secin"
            value={cities}
          />
        </div>
        <div>
        </div>
        <div class="boxes">
          {eventsToShow.map((event) => {
            return (
              <>
                <div class="box">
                    <img src={event.image}></img>
                    <h3>{event.eventName}</h3>
                    <h2>{event.eventCity}</h2>
                    <h2 className="unlu">{event.eventArtist}</h2>
                    <h2>{event.eventImage}</h2>
                    <p className="eventaciklama">{event.eventDescription}</p>
                    <p className="eventaciklama">
                      {" "}
                      
                    </p>
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
