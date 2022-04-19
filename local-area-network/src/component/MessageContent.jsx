import React from "react";
import { useContext } from 'react';
import MessageContext from "../MessageContext";

import classes from '../styles/content.module.css'

const MessageContent = () => {
  
  let { content } = useContext(MessageContext);
  // let content = '1234'
  return (
      <section className={classes.body}>
        <h3>Message Content</h3>
        <div>{content}</div>
        <div>
          <input type="text" placeholder="Enter Key..." />
          <button type="submit">Decrypt</button>
        </div>
      </section>
  );
};

export default MessageContent;
