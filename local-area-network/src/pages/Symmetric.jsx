import React from "react";

import MessageForm from "../component/Symmetric/MessageForm";
import Messages from "../component/Symmetric/Messages";
import MessageContent from "../component/Symmetric/MessageContent";

import { Link } from "react-router-dom";

import { MessageProvider } from "../MessageContext";
import classes from "../styles/sym.module.css";

const Symmetric = () => {
  return (
    <MessageProvider>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Symmetric Encryption
        </h1>
        <div className={`${classes.body} `}>
          <MessageForm />
          <Messages />
          <MessageContent />
        </div>
      </div>
      <div>
        <button className={classes.button}>
          <Link to="/async">Asymetric Encryption</Link>
        </button>
      </div>
    </MessageProvider>
  );
};

export default Symmetric;
