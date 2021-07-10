/* eslint-disable react/style-prop-object */
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      
      <div class="about-content">
        <h2>About Gibri-Events</h2>
        <p>
          We have created an extremely positive and relaxed environment all
          geared towards developing your skills whether you are an absolute
          beginner trying to get off the ground or an accomplished player
          looking to move to the next level. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s
        </p>

         {/* <a href="/home" class="btn btn-primary">
          View Date & Place <i class="fa fa-angle-right"></i>
  </a> */}
          <h2 class="Team">Our Team</h2>
          <div class="row">
            <div class="column">
              <div class="kart">
               <img src="https://avatars.githubusercontent.com/u/74990420?v=4" alt="Akinsel" />
               <div class="container">
                 <h2 class="isimler">Ahmet Akinsel</h2>
                 <p class="aciklama">Junior Developer</p>
               </div>
              </div>
            </div>

            <div class="column">
              <div class="kart">
               <img src="https://avatars.githubusercontent.com/u/73131048?v=4" alt="Akinsel" />
               <div class="container">
                 <h2 class="isimler">Buse Ozkan</h2>
                 <p class="aciklama">Junior Developer</p>
               </div>
              </div>
            </div>

            <div class="column">
              <div class="kart">
               <img src="https://scontent.fada2-2.fna.fbcdn.net/v/t1.18169-9/29790177_10156371848822188_2342701848240893447_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFwBrOeKQVn5Hlp3VywbnCBiSRkvATriHOJJGS8BOuIcxyG0W9LbzUXi_RvqBU2QK8&_nc_ohc=5nZtOa7Cw0wAX99A_L-&_nc_ht=scontent.fada2-2.fna&oh=b251868a74a89034243577dd646508e8&oe=60EE473C" alt="Akinsel" />
               <div class="container">
                 <h2 class="isimler">Ahmet Misirli</h2>
                 <p class="aciklama">Junior Developer</p>
               </div>
              </div>
            </div>


          </div>
      </div>
    </section>
  );
};

export default About;
