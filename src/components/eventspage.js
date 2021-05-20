import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Button, Card } from 'react-bootstrap';
import Row from 'react-bootstrap';

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
            {events !== undefined ?
            <Row className="m-4">
                {events.map((event,i) => (
                
                )
                
                )}
            </Row>

                : null}
        </Container>
    );
}
/*
const eventsList = () => {
    return (
        <>
            <div id="wrapper">
                <div
                    className="eventslist"
                    hidden
                    style={{ zIndex: "10000 " }}
                >
                    <div
                        className="navigationbar"
                        style={{ minHeight: "60px" }}
                    >
                        <form className="search">
                            <input
                                className="searchinput"
                                type="search"
                                placeholder="Search.."
                                autoFocus
                            />
                        </form>
                    </div>
                </div>


                <div className="page-content">
                    <div className="container">
                        <div className="mt-lg-5" data-uk-grid>
                            <div className="uk-width-1">
                                <div
                                    className="sidebar-filter"
                                    data-uk-sticky="top:20"
                                >
                                    <button
                                        className="btn-sidebar-filter"
                                        data-uk-toggle="target">
                                        Filter{" "}
                                    </button>

                                    <div className="sidebar-filter-container">
                                        <h4> Filter By </h4>

                                        <ul
                                            className="sidebar-filter-list"
                                            data-uk-accordion="multiple: true"
                                        >
                                            <li className="cy-open">
                                                <a className="cy-accordion-title" href="#">
                                                    {" "}
                                                Event Type{" "}
                                                </a>
                                                <div className="cy-accordion-content">
                                                    <div className="cy-form-controls">
                                                        <label>
                                                            <input
                                                                className="cy-radio"
                                                                type="radio"
                                                                name="radio1"
                                                            />
                                                            <span className="test">
                                                                {" "}
                                                            Music <span> (25) </span> {" "}
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <input className="cy-radio"
                                                                type="radio"
                                                                name="radio1"
                                                            />
                                                        </label>
                                                        <label>
                                                            <input
                                                                className="cy-radio"
                                                                type="radio"
                                                                name="radio1" />
                                                            <span className="test">
                                                                {" "}
                                                            Arts-Crafts <span> (12) </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="cy-open">
                                                <a className="cy-accordion-title" href="#">
                                                    {" "}
                                                Event Type{" "}
                                                </a>
                                                <div className="cy-accordion-content">
                                                    <div className="cy-form-controls">
                                                        <label>
                                                            <input
                                                                className="cy-radio"
                                                                type="radio"
                                                                name="radio2"
                                                            />
                                                            <span className="test"> Free (42) </span>
                                                        </label>
                                                        <label>
                                                            <input
                                                                className="cy-radio"
                                                                type="radio"
                                                                name="radio2"
                                                            />
                                                            <span className="test"> Paid </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="cy-open">
                                                <a className="cy-accordion-title" href="#">
                                                    {" "}
                                                Artist Name {" "}
                                                </a>
                                                <div className="cy-accordion-content">
                                                    <div className="cy-form-controls">
                                                        <label>
                                                            <input
                                                                className="cy-radio"
                                                                type="radio"
                                                                name="radio3"
                                                            />
                                                            <span className="test"> +5 hourse (23) </span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-expand">
                                <div className="section-header">
                                    <div className="section-header-left">
                                        <h4> Concert </h4>
                                    </div>
                                    <div className="section-header-right">
                                        <div className="display-as">
                                            <a
                                                href="#"
                                                data-cy-tooltip="title:Event List; pos: top-right"
                                            >
                                                <i className="icon-feather-grid"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="active"
                                                data-cy-tooltip="title:Event Grid; pos: top-right">
                                                <i className="icon-feather-list"></i>
                                            </a>
                                        </div>

                                        <select className="selectpicker ml-3">
                                            <option value=""> Newest </option>
                                            <option value="1"> Popular </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="event-card">
                                    <div className="event-card">
                                        <img src="https://www.kibrisgazetesi.com/images/resize/100/656x400/haberler/64dd925c90ab0099a0e7a1a6b1eb7cc0.jpg"
                                        />
                                        <a
                                            href="#"
                                            className="play-button-trigger"
                                        ></a>
                                    </div>
                                    <div className="event-card-body">
                                        <a href="#">
                                            <h4> Ahmet Evan 1 Haziran'da Narnia'da! </h4>
                                        </a>
                                        <p>
                                            Ahmet Evan ulkemizin muzisyenlerinden.
                                            Biletlerinizi ayirtmayi unutmayin.
                                    </p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
*/


export default Programs;