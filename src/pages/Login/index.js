import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useHistory } from "react-router";
import useForm from "effects/useForm";
import Authentication from "services/Authentication";

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
      <text id="welcomeText">Welcome To Gibri-Events</text>
      {/*<div onSubmit={handleSubmit}>*/}
      <div size="lg" controlId="email">
        <label className="label">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="email"
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
        <div>
          <Form.Group size="lg" controlId="password">
            <Form.Label className="label">Password</Form.Label>
            <input
              className="password-input"
              type="password"
              placeholder="password-field"
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
          className="btn btn-primary btn-block waves-effect waves-light"
          type="submit"
          disabled={!isValid}
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
      <div className="Links">
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
