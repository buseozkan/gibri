import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginImg from "../login.svg";
import './register.css';



const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register">
      <div>
        <img src={loginImg} alt="img" />
      </div>
      <text id="text">Let's Sign Up </text>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control className="input"
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Surname</Form.Label>
          <Form.Control className="input"
            type="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Confirm Password</Form.Label>
          <Form.Control className="input"
            type="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="Registration-Button"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Register
        </Button>
      </Form>
      <div className="Links">
        <div>
          <a className="continueAsGuest" href="ghost">
            Just browse as a guest!
          </a>
        </div>
        <div>
          <a className="helpMe" href="btn">
            Help Me
          </a>
        </div>
      </div>
    </div>
  );
};



/*
export class Register extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="Name" placeholder="Name" />
            </div>
           
              <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input type="text" name="Surname" placeholder="Surname" />
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
        forget password*/
//{}
//   <div className="footer">
//   <button type="button" className="btn">
//   Register
// </button>
//</div>
//  </div>
//);
// }
//}

export default Register;