import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
//import forgetPassword from "../ForgetPassword/forgetpassword";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router";
import Authentication from "../../services/Authentication/index";


//need help add to bottom
//login + forget password + register + continue as a guest
let auth = new Authentication();

const Login = ({ forceUpdate, updateCount }) => {
  let history = useHistory();
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    auth
      .login({ email, password })
      .then(() => {
        history.pushState("/");
        forceUpdate();
      })
      .catch((err) => {
        setInvalidCredentialsError("Incorrect Email or Password");
      });
  };

  return (
    <div className="Login">
      <text id="welcomeText">Welcome be canlar </text>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control className="input"
            autoFocus
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
        <Button
          className="Login-Button"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
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

export default Login;
