import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const contactUs = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      };

return (
    <div className="ConcatUs">
    <Form>
        <h1>Contact Us</h1>
        <label>Name<label>
            <input placeholder="name"></input>
            <label type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>Email</label>
            <input placeholder="email"></input>
            <label>Message</label>
            <textarea placeholder="Message"></textarea>
            <button type="submit" 
            >Submit</button>
    <Form />
    </div>
)
};

export default contactUs;