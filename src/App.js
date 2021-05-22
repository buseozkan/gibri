import React, { useState } from "react";
import "./App.css";
import Login from "../src/components/login";
import Register from "../src/components/register";
import forgetPassword from "../src/components/forgetpassword";
import Programs from "../src/components/eventspage";
import Home from "../src/components/homepage";
import AboutUs from "../src/components/aboutus";
import Search from "../src/components/search";
import Navbar from "../src/components/navbar";

import {
  Route,
  NavLink,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Navbar />

          <div className="app">
            <Route path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/eventspage" component={Programs}/>
            <Route path="/register" component={Register}/>
            <Route path="/navbar" component={Navbar}/>
          </div>
          <Search />
        </div>
      </HashRouter>
    )
  }
}

export default App;
