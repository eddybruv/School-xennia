import React, { useState } from "react";
import classes from "../styles/form.module.css";
import axios from "axios";

const MessageForm = () => {
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const submit = async (e) => {
    let response = await axios.post("http://172.20.10.13:5000/", message);
    setMessage({
      name: "",
      message: "",
    });

    if (response.status === 200) {
      alert("Message sent");
    } else {
      alert("Message not sent");
    }
  };

  return (
    <section className={classes.body}>
      <h3>Message Form</h3>
      <form className={classes.form}>
        <input
          onChange={handleChange}
          value={message.name}
          name="name"
          type="text"
          placeholder="Name of Sender..."
        />
        <textarea
          onChange={handleChange}
          value={message.message}
          name="message"
          type="text"
          placeholder="Message..."
        />
        <button onClick={submit} type="button">
          Send
        </button>
      </form>
    </section>
  );
};

export default MessageForm;
