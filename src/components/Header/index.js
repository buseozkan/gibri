import React from "react";

const Header = () => {
  return (
    <div id="header" role="banner">
      <div class="main-nav">
        <div class="container">
          <div class="header-top">
            <div class="pull-right social-icons">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">
                <img class="img-responsive" src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="scroll active">
                  <a href="#home">Home</a>
                </li>
                <li class="scroll">
                  <a href="#explore">Explore</a>
                </li>
                <li class="scroll">
                  <a href="#event">Events</a>
                </li>
                <li class="scroll">
                  <a href="#about">About</a>
                </li>
                <li>
                  <a class="no-scroll" href="#" target="_blank">
                    PURCHASE TICKETS
                  </a>
                </li>
                <li class="scroll">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
