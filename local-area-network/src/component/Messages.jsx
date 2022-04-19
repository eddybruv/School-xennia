import React from "react";
import data from "../data";
import Message from './Message'
import classes from '../styles/messages.module.css'

const Messages = () => {
  return (
    <section className={classes.body}>
      <h3>Messages</h3>
      <div className={classes.data}> 
        {data.map((message, index) => {
          return (
            <Message
              key={index}
              message={message.content}
              sender={message.sender}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Messages