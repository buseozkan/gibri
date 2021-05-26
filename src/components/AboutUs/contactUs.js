import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const contactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] =useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
      };

return (
    <div className="ConcatUs">
        <div></div><h1>Contact Us</h1>
        <label type="name"
            value={name}
            onChange={(n) => setName(n.target.value)}>Name<label>
            <input placeholder="name"></input>
            <label type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>Email</label>
            <input placeholder="email"></input>

            <label type="message"
            value={message}
            onChange={(m) => setMessage(m.target.value)}>Message</label>
            <textarea placeholder="Message"></textarea>
            <button type="submit"
            value={submit}
            onClick={(e) => setSubmit(e.target.value)}>Submit</button>
 </div>
)
};

export default contactUs;