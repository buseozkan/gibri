/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./explore.css";

const Explore = () => {
  return (
    <section id="event">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <div
              id="event-carousel"
              class="carousel slide"
              data-interval="false"
            >
              <h2 class="heading">THE ROCKING Performers</h2>
              <a
                class="even-control-left"
                href="#event-carousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="even-control-right"
                href="#event-carousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
              <div class="carousel-inner">
                <div class="item active">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="https://cdn.pixabay.com/photo/2021/07/03/22/15/buildings-6384966_960_720.jpg"
                          alt="event-image"
                        />
                        <h4>Chester Bennington</h4>
                        <h5>Vocal</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="images/event/event2.jpg"
                          alt="event-image"
                        />
                        <h4>Mike Shinoda</h4>
                        <h5>vocals, rhythm guitar</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="https://cdn.pixabay.com/photo/2021/07/03/22/15/buildings-6384966_960_720.jpg"
                          alt="event-image"
                        />
                        <h4>Rob Bourdon</h4>
                        <h5>drums</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="images/event/event1.jpg"
                          alt="event-image"
                        />
                        <h4>Chester Bennington</h4>
                        <h5>Vocal</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="https://cdn.pixabay.com/photo/2021/07/03/22/15/buildings-6384966_960_720.jpg"
                          alt="event-image"
                        />
                        <h4>Mike Shinoda</h4>
                        <h5>vocals, rhythm guitar</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-event">
                        <img
                          class="img-responsive"
                          src="https://cdn.pixabay.com/photo/2021/07/03/22/15/buildings-6384966_960_720.jpg"
                          alt="event-image"
                        />
                        <h4>Rob Bourdon</h4>
                        <h5>drums</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="guitar">
            <img class="img-responsive" src="https://cdn.pixabay.com/photo/2021/07/03/22/15/buildings-6384966_960_720.jpg" alt="guitar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;