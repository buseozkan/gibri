import React, { useState } from "react";
import "./App.css";
import Login from "../src/components/Login/login";
import Register from "../src/components/Register/register";
//import forgetPassword from "../src/components/ForgetPassword/forgetpassword";
import Home from "../src/components/HomePage/homepage";
import AboutUs from "../src/components/AboutUs/index";
import Navbar from "../src/components/NavBar/navbar";

import {
  Route,
  NavLink,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
import Programs from "../src/components/HomePage/homepage";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Navbar />

          <div className="appcss">
            
            <Route path="/homepage" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/events" component={Programs}/>
            <Route path="/register" component={Register}/>
            <Route path="/navbar" component={Navbar}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
