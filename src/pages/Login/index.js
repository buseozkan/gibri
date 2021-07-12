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
    <div className="Login-Page">
      <div className="login-img">
        <img className="login-img" src={loginImg} alt="img" />
      </div>
      <text id="welcomeText">Welcome To Gibri-Events</text>

      <div className="inputs">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
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
      </div>
      <div>
        <div className="inputs">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
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
          <a className="helpMe" href="./contact">
            Help Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
