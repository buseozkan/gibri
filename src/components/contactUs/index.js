import React, {useState} from "react";

const contactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
      };

return (
    <div className="ConcatUs">
        <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div>
      <label type="name"
            value={name}
            onChange={(n) => setName(n.target.value)}>Name</label>
            <input placeholder="name"></input>
      </div>
      <div>
      <label type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>Email</label>
            <input placeholder="email"></input>
      </div>
      <div>
      <label type="message"
            value={message}
            onChange={(m) => setMessage(m.target.value)}>Message</label>
            <textarea placeholder="Message"></textarea>
      </div>
      <button type="submit"
            value={submit}
            onClick={(e) => setSubmit(e.target.value)}>Submit</button>
    </form>
    </div>
  );
};    

export default contactUs;