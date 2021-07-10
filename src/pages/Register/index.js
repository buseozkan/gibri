import React, { useState } from "react";
import Authentication from "services/Authentication";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginImg from "./login.svg";
import "./register.css";

let auth = new Authentication();

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
          <Form.Control
            className="input"
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Surname</Form.Label>
          <Form.Control
            className="input"
            type="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Confirm Password</Form.Label>
          <Form.Control
            className="input"
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
          <a className="helpMe" href="/contact">
            Help Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
