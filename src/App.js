import React from "react";
//import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./components/About";
import Navbar from "../src/components/NavBar/navbar";
//import contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "components/Header";
//import Explore from "./components/Explore";
import Contact from "./components/Contact";
import Reservation from "./pages/reservation/reservation";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
