import React, {useState, useEffect} from "react";
import data from "../data";
import Message from './Message'
import classes from '../styles/messages.module.css'
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState(null);

  const fetchServer = async() => {
    const result = await axios.get('http://192.168.100.207:5000/');
    setMessages(result.data);
  }

  useEffect(() => {
    fetchServer()
  }, [])

  return (
    <section className={classes.body}>
      <h3>Messages</h3>
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

export default Messages