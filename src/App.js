import React, { useState } from "react";
import "./App.css";
import Login from "../src/components/Login/login";
import Register from "../src/components/Register/register";
//import forgetPassword from "../src/components/ForgetPassword/forgetpassword";
import AboutUs from "../src/components/AboutUs/index";
import Navbar from "../src/components/NavBar/navbar";
import contactUs from "./components/contactUs";

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
            <Route path="/homepage" component={Programs}/>
            <Route path="/login" component={Login}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/register" component={Register}/>
            <Route path="/navbar" component={Navbar}/>
            <Route path="/aboutus" component={contactUs}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
