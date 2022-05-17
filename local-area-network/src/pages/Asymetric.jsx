import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import MessageFormAsc from "../component/Assymetric/MessageFormAsc";
import MessagesAsc from "../component/Assymetric/MessagesAsc.jsx";
import MessageContentAsc from "../component/Assymetric/MessageContentAsc";

import axios from "axios";

import { MessageProvider } from "../MessageContext";

import { generateKeys } from "../cipherAsc";

import classes from "../styles/asym.module.css";

const Asymetric = () => {
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      setContent(false);
      //Do other stuff
      const { publicKey, privateKey } = generateKeys();
      //Save username and public key to database
      const user = {name: username, publicKey}
      const sendUser = await axios.post('http://192.168.43.168:5000/asymm/user', user);
      
      if(sendUser.data.message === 'username taken'){
        setUsername('');
        setContent(true)
        alert('username taken!')
      } else {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("privateKey", JSON.stringify(privateKey));
        setShowModal(false);
      }

    } else {
      alert("Please enter a username");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setShowModal(false);
    }
  }, []);

  return (
    <MessageProvider>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Assymetric Encryption
        </h1>
        <div className={`${classes.body} `}>
          <MessageFormAsc />
          <MessagesAsc />
          <MessageContentAsc />
        </div>
      </div>
      <div>
        <button className={classes.button}>
          <Link to="/sync">Symmetric Encryption</Link>
        </button>
      </div>
      {showModal && (
        <div className={classes.modal}>
          <form onSubmit={handleSubmit}>
            <div className={classes.modalContent}>
              {content ? (
                <>
                  <h3>Enter Your Username</h3>
                  <input
                    type="text"
                    placeholder="Username...."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button onClick={handleSubmit} type="submit">
                    Submit
                  </button>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </form>
        </div>
      )}
    </MessageProvider>
  );
};

export default Asymetric;
