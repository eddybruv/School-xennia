import React, { useContext, useState } from "react";
import classes from "../../styles/form.module.css";
import axios from "axios";

import MessageContext from "../../MessageContext"; 

const MessageForm = () => {

  const { url } = useContext(MessageContext);

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
    let response = await axios.post(url+"/", message);
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
      <h2>Message Form</h2>
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
