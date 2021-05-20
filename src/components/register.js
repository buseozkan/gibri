import React from "react";
import loginImg from "../login.svg";

export class Register extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registeration</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="nameSurname">Name Surname</label>
              <input type="text" name="Name Surname" placeholder="Name Surname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>

        {/*footer right-help
        forget password*/}

        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;