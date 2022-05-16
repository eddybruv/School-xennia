import React, { useState, useEffect } from "react";
import Message from "./Message";
import classes from "../styles/messages.module.css";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState(null);

  const fetchServer = async () => {
    const result = await axios.get("http://localhost:5000/");
    setMessages(result.data);
  };

  useEffect(() => {
    fetchServer();
  }, [messages]);

  return (
    <section className={classes.body}>
      <h2>Messages</h2>
      <div className={classes.data}>
        {messages?.map((message, index) => {
          return (
            <Message
              key={index}
              message={message.message}
              sender={message.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Messages;
