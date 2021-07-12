import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authentication from "services/Authentication";
import { useHistory } from "react-router";
import useForm from "effects/useForm";
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
        <img className="register-img" src={loginImg} alt="img" />
      </div>
      <text id="text">Let's Sign Up </text>
      <Form className="forms" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Control
            className="input"
            autoFocus
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            className="input"
            type="surname"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            className="input"
            type="confirmPassword"
            placeholder="Confirm Password"
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
    </div>
  );
};

export default Register;
