import React, { Component } from "react";
import { Link } from "react-router-dom";
import './homepage.css';

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <img src="https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w" />
                    <div>
                        <h1 className='event1'> Ahmet Evan 1 Haziran
                        <img className="photo" alt="panda"
                                src="https://www.havadiskibris.com/wp-content/uploads/2019/06/Ahmet-Evan.jpg" />
                        <p1 className='aciklama'>Ahmet Evan Narnia da</p1>
                        </h1>
                        <h1 className='event2'> Frekans 2 Haziran </h1>
                        <p1> Shamrock </p1>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;