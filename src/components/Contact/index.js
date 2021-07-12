import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import "./contactUs.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { submitName, submitEmail, submitMessage } = (event) => {
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

  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <p classname="aciklama2">
        Let us know what you think! In order to provide better service, please
        do not hesitate to give us your feedback. Thank you.
      </p>
      <Form onSubmit={(submitName, submitEmail, submitMessage)} method="POST">
        <div className="page-content">
          <div>
            <input
              className="input"
              placeholder="Name"
              id="name"
              type="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
          </div>
          <div>
            <textarea
              className="input"
              placeholder="Message"
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Contact;
