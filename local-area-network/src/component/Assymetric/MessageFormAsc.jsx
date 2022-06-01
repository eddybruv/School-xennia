import React, { useState,useEffect, useContext } from "react";
import classes from "../../styles/form.module.css";

import axios from "axios";

import { encryptAll } from '../../cipherAsc'
import MessageContext from "../../MessageContext";

const MessageFormAsc = () => {

  const { url } = useContext(MessageContext);

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(url+"/asymm/get_user");
      await setUsers(result.data);
    };
    fetchUsers()
  }, [])
  
  const [message, setMessage] = useState('');

  
  const [selected, setSelected] = useState('');
  
  const loggedUser = sessionStorage.getItem('username');

  

  useEffect(() => {
    if(selected) console.log(selected)
    
    // console.log(message)
  }, [selected]);
  
  async function  handleChange(e)  {
    // console.log("E", e.target.value);
    await setSelected(e.target.value);
  }


  const submit = async (e) => {
    e.preventDefault();
    if(!selected || selected === "none"){
      alert("Please select a user to send to")
      return;
    }
    setContent('Sending...');
    setShowModal(true);
    let key;
    key = selected? users.find(user => user.name === selected).publicKey : users[0].publicKey;
    let encrypted = await encryptAll(message, key);
    const data = {
      message: encrypted,
      sender: loggedUser,
      receiver: selected
    }
    console.log(data);
    let response = await axios.post(
      url+"/asymm/message",
      data
    );
    setMessage('');

    if (response.status === 200) {
      // alert("Message sent");
      setContent('Message sent');
    } else {
      // alert("Message not sent");
      setContent('Message not sent');
    }
    setTimeout(function(){
      setShowModal(false);
    }, 1000);
  };

  return (
    <section className={classes.body}>
      <h3>Message Form</h3>
      <form className={classes.form}>
        
        <select
          className={classes.select}
          name="receiver"
          onChange={(e) => handleChange(e)}
        >
          <option value="none">Select a User</option>
          {users.map((user, index) => {
            return (
              <option value={user.name} key={index}>
                {user.name}
              </option>
            );
          })}
        </select>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          type="text"
          placeholder="Message..."
        />
        <button onClick={submit} type="submit">
          Encrypt &amp; Send
        </button>
      </form>
      {showModal && <div className={classes.modal}>
            <div className={classes.modalContent}>
              <h3>{content}</h3>
            </div>
        </div>}
    </section>
  );
};

export default MessageFormAsc;
