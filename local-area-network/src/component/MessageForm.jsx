import React, { useState } from 'react'
import classes from '../styles/form.module.css';
import axios from 'axios'

const MessageForm = () => {
  const [message, setMessage] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  }

  /* function isAlpha(c) {
    if (c.match(/^[a-zA-Z]/)) return true;
    return false;
  }

  function encrypt(text, s) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (!isAlpha(char)) {
        result += char;
        continue;
      } else {
        if (char.toUpperCase() === text[i]) {
          let ch = String.fromCharCode(
            ((char.charCodeAt(0) + s - 65) % 26) + 65
          );
          result += ch;
        } else {
          let ch = String.fromCharCode(
            ((char.charCodeAt(0) + s - 97) % 26) + 97
          );
          result += ch;
        }
      }
    }
    return result;
  }
 */
  const submit = async (e) => {
    
    let response = await axios.post('http://192.168.43.66:5000/', message);
    setMessage({
      name: '',
      message: ''
    });

    if (response.status === 200) {
      alert('Message sent')
    } else {
      alert("Message not sent");
    }
  }

  return (
    <section className={classes.body}>
      <h3>Message Form</h3>
      <form className={classes.form}>
        <input onChange={handleChange} value={message.name} name='name' type="text" placeholder="Name of Sender..." />
        <textarea onChange={handleChange} value={message.message} name='message' type="text" placeholder="Message..." />
        <button onClick={submit} type="button">Send</button>
      </form>
    </section>
  )
}

export default MessageForm