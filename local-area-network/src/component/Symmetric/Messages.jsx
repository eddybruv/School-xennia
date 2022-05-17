import React, { useState, useEffect, useContext } from "react";
import Message from "./Message";
import classes from "../../styles/messages.module.css";
import axios from "axios";
import MessageContext from "../../MessageContext";

const Messages = () => {

  const { url } = useContext(MessageContext );

  const [messages, setMessages] = useState(null);

  const fetchServer = async () => {
    const result = await axios.get(url+"/");
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
