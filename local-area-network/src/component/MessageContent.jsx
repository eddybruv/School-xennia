import React, { useState } from "react";
import { useContext } from "react";
import MessageContext from "../MessageContext";
import classes from "../styles/content.module.css";

const cipher = require("../cipher");

const MessageContent = () => {
  let { content } = useContext(MessageContext);
  const [deMessage, setDeMessage] = useState(content);
  const [showDecrypted, setShowDecrypted] = useState(false);
  // let content = '1234'
  const [key, setKey] = useState(null);
  const handleChange = (e) => {
    setDeMessage(content);
    setKey(e.target.value);
    setDeMessage(false);
  };

  const checkInput = (key) => {
    if (key === "") {
      alert("Enter key!");
      return false;
    }
    return true;
  };

  const handleDecryption = () => {
    if(checkInput)
      {
        setShowDecrypted(true);
        setDeMessage(cipher.decrypt(content, key));
        setKey('')
      }
  };

  return (
    <section className={classes.body}>
      <h3>Message Content</h3>
      <div>{content}</div>
      <div>
        <input type="text" onChange={handleChange} placeholder="Enter Key..." />
        <button onClick={handleDecryption} type="button">
          Decrypt
        </button>
      </div>
      <h3>Decrypted Message</h3>
      <div>{!showDecrypted ? "NOTHING DECRYPTED YET" : deMessage}</div>
    </section>
  );
};

export default MessageContent;
