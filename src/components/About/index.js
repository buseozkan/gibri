/* eslint-disable react/style-prop-object */
import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container2">
      <h2 className="team-header">Our Team</h2>
      <p className="page-text">
        We have created an events page as beginner junior developers. This webpage is for Cyprus events only. Making reservations and buying tickets options will be available soon. Please bear with us!
      </p>
      <div className="team-members">
        <div className="team-member-1">
          <img classname="foto"
            src="https://scontent.fada2-2.fna.fbcdn.net/v/t1.18169-9/29790177_10156371848822188_2342701848240893447_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFwBrOeKQVn5Hlp3VywbnCBiSRkvATriHOJJGS8BOuIcxyG0W9LbzUXi_RvqBU2QK8&_nc_ohc=5nZtOa7Cw0wAX99A_L-&_nc_ht=scontent.fada2-2.fna&oh=b251868a74a89034243577dd646508e8&oe=60EE473C"
            alt="Akinsel"
          />
          <h2 className="member-header-1">Ahmet Misirli</h2>
          <p className="member-text">Junior Developer</p>
          <form action="https://github.com/AhmetMustafa">
            <button type="link" className="github-btn-1">
              Github Page
            </button>
          </form>
        </div>
        <div className="team-member-2">
          <img classname="foto"
            src="https://avatars.githubusercontent.com/u/73131048?v=4"
            alt="Akinsel"
          />
          <h2 className="member-header-2">Buse Ozkan</h2>
          <p className="member-text">Junior Developer</p>
          <form action="https://github.com/buseozkan">
            <button type="link" className="github-btn-2">
              Github Page
            </button>
          </form>
        </div>
        <div className="team-member-3">
          <img classname="foto"
            src="https://avatars.githubusercontent.com/u/74990420?v=4"
            alt="Akinsel"
          />
          <h2 className="member-header-2">Ahmet Akinsel</h2>
          <p className="member-text">Junior Developer</p>

          <form action="https://github.com/ahmetakinsel">
            <button type="link" className="github-btn-3">
              Github Page
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
