import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./contactUs.css";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");

  const {submitName, submitEmail, submitMessage} = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  }
  return (
    <div className="container">
      <div className="container">
        <div className="container">
          <div className="container">
            <h2 className="title">Contact Us</h2>
            <p>
              Let us know what you think! In order to provide better service,
              please do not hesitate to give us your feedback. Thank you.
              </p>
            <Form
              controlId="container"
              onSubmit={submitName, submitEmail, submitMessage}
              method="POST"
            >
              <div className="container">
                <div className="container">
                  <div className="container">
                    <input
                      placeholder="Name"
                      id="name"
                      type="name"
                      className="container"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className="container">
                    <input
                      placeholder="Email"
                      id="email"
                      type="email"
                      className="container"
                      aria-describedby="emailHelp"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                </div>
              </div>
              <div className="container">
                <textarea
                  placeholder="Message"
                  id="message"
                  className="container"
                  required
                  value={message}
                  onChange={(e) => SetMessage(e.target.value)}
                  />
              </div>
              <button type="submit">
                Submit
                </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
