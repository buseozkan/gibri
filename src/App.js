import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./components/About";
import Navbar from "../src/components/NavBar/navbar";
import contact from "./components/Contact";
import { Route, NavLink, Switch, Link, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />

        <div className="appcss">
          <Login path="/login" />
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
