import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "../src/components/Register/register";
import About from "./components/About";
import Navbar from "../src/components/NavBar/navbar";
import contact from "./components/Contact";
import { Route, NavLink, Switch, Link, HashRouter } from "react-router-dom";
import Programs from "../src/components/HomePage/homepage";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />

        <div className="appcss">
          <Route path="/homepage" component={Programs} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/aboutus" component={contact} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
