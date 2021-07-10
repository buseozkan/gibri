import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useHistory } from "react-router";
import useForm from "effects/useForm";
import Authentication from "services/Authentication";
import loginImg from "./login.svg";
import "../Login/login.css";

let auth = new Authentication();

const Login = ({ forceUpdate }) => {
  let history = useHistory();
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");
  const {
    email,
    emailErrorMessage,
    password,
    passwordErrorMessage,
    setEmail,
    setPassword,
    isValid,
  } = useForm({
    email: {
      validation: (email) => {
        if (email === "") {
          return "Email is required";
        }
      },
      initialValue: "",
    },
    password: {
      validation: (password) => {
        if (password === "") {
          return "Password is required";
        }
      },
      initialValue: "",
    },
  });
  const handleLogin = (event) => {
    event.preventDefault();
    auth
      .login({ email, password })
      .then(() => {
        history.push("/");
        forceUpdate();
      })
      .catch((err) => {
        setInvalidCredentialsError("Incorrect Email or Password");
      });
  };

  return (
    <div className="Login">
      <div>
      <img src={loginImg} alt="img" />
      </div>
      <text id="welcomeText">Welcome To Gibri-Events</text>
      {/*<div onSubmit={handleSubmit}>*/}
      <div>
      <Form.Group size="lg" controlId="password"> 
      <Form.Label className="label">Email </Form.Label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email here"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        {emailErrorMessage && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              "margin-top": "-7px",
            }}
          >
            {emailErrorMessage}
          </p>
        )}
        </Form.Group>
      </div>
      <div>
        <div>
          <Form.Group size="lg" controlId="password">
            <Form.Label className="label">Password</Form.Label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password here"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </Form.Group>
        </div>
        {passwordErrorMessage && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              "margin-top": "-7px",
            }}
          >
            {passwordErrorMessage}
          </p>
        )}
        {invalidCredentialsError && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              "margin-top": "-7px",
            }}
          >
            {invalidCredentialsError}
          </p>
        )}
        <button
          className="loginbutton"
          type="submit"
          disabled={!isValid}
          value="Register"
          onClick={(event) => {
            event.preventDefault(event);
              handleLogin(event);
          }}
        >
          Log In
        </button>
      </div>
      <div className="Links">
        <div>
          <a className="helpMe" href='./contact'>
            Help Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
