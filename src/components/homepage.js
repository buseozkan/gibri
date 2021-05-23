/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './homepage.css';

class Home extends Component {
    render() {
        return (
            <>
                <h1>Example Flexbox Gallery</h1>

                <div class="boxes">
                    <div class="box box1">
                        <img src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
                        <h3>Ahmet Evan Narnia'da</h3><p>&nbsp;</p>
                    </div>
                    <div class="box box2">
                        <img src="https://m.media-amazon.com/images/I/71gx-y3ksXL._SS500_.jpg" alt="Sunset in Amsterdam" />

                        <h3>Frekans Shamrock'da</h3>
                        <p> Detaylar icin.. </p>
                    </div>
                    <div class="box box3">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Sign in Pioneer Square; Portland, Oregon" />
                        <h3>Portland Signpost</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box4">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/love-the-architecture-01-1024x768.jpg" alt="amsterdam architecture" />
                        <h3>The architecture rocks</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box5">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/sunset-1024x768.jpg" alt="beautiful sunset" />
                        <h3>Amsterdam Sunset</h3>
                        <p> ... </p>
                    </div>
                    <div class="box box6">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32795/pdx-signpost.jpg" alt="Portland Signpost" />
                        <h3>Portland Signpost</h3>
                        <p> ... </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;