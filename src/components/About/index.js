/* eslint-disable react/style-prop-object */
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container2">
        <p>
          We have created an events page as beginner junior developers. This
          webpage is for Cyprus events only. Hope you will like it.
        </p>
        
        <h2 class="Team">Our Team</h2>
        <div className="row">
          <div class="column">
            <div className="kart">
              <img
                src="https://avatars.githubusercontent.com/u/74990420?v=4"
                alt="Akinsel"
              />
              <div class="kutu">
                <h2>Ahmet Akinsel</h2>
                <p class="aciklama">Junior Developer</p>
                <p>
                  <form action="https://github.com/ahmetakinsel">
                    <button type="link" class="github">
                      Github Page
                    </button>
                  </form>
                </p>{" "}
              </div>
            </div>
          </div>

          <div class="column">
            <div class="kart">
              <img
                src="https://avatars.githubusercontent.com/u/73131048?v=4"
                alt="Akinsel"
              />
              <div class="kutu">
                <h2>Buse Ozkan</h2>
                <p class="aciklama">Junior Developer</p>
                <p>
                  <form action="https://github.com/buseozkan">
                    <button type="link" class="github">
                      Github Page
                    </button>
                  </form>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="kart">
              <img
                src="https://scontent.fada2-2.fna.fbcdn.net/v/t1.18169-9/29790177_10156371848822188_2342701848240893447_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFwBrOeKQVn5Hlp3VywbnCBiSRkvATriHOJJGS8BOuIcxyG0W9LbzUXi_RvqBU2QK8&_nc_ohc=5nZtOa7Cw0wAX99A_L-&_nc_ht=scontent.fada2-2.fna&oh=b251868a74a89034243577dd646508e8&oe=60EE473C"
                alt="Akinsel"
              />
              <div class="kutu">
                <h2>Ahmet Misirli</h2>
                <p class="aciklama">Junior Developer</p>
                <p>
                  <form action="https://github.com/AhmetMustafa">
                    <button type="link" class="github">
                      Github Page
                    </button>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
