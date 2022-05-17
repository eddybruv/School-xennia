import React, { useState, useEffect, useContext } from "react";
import classes from "../../styles/messages.module.css";
import axios from "axios";
import MessageAsc from "./MessageAsc";
import MessageContext from "../../MessageContext";

const MessagesAsc = () => {

  const { url } = useContext(MessageContext);

  const [messages, setMessages] = useState(null);

  const fetchServer = async () => {
    const result = await axios.get(url+"/asymm/message");
    setMessages(result.data);
  };

  useEffect(() => {
    fetchServer();
  }, []);

  return (
    <section className={classes.body}>
      <h3>Messages</h3>
      <div className={classes.none}>
        {messages?.map((message, index) => {
          return (
            <MessageAsc
              key={index}
              message={message.message}
              sender={message.sender}
              receiver={message.receiver}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MessagesAsc;
