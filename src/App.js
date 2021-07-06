import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./components/About";
//import Navbar from "../src/components/NavBar/navbar";
//import contact from "./components/Contact";
import Footer from "./components/Footer";
import { Router, Route, Switch } from "react-router-dom";
import Header from "components/Header";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <div className="page-content">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Login path="/login" />
          <div>
            <About path="/aboutus" />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
