import React, { useState,useEffect } from "react";
import classes from "../../styles/form.module.css";
import axios from "axios";

const MessageFormAsc = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get("http://localhost:5000/asymm/get_user");
      setUsers(result.data);
    };

    fetchUsers()
    
  }, [])
  
  const [message, setMessage] = useState({
    sender: "",
    message: "",
    receiver: ''
  });

  
  const [selected, setSelected] = useState('');
  
  const loggedUser = sessionStorage.getItem('username');

  

  useEffect(() => {
    if(selected) console.log(selected)
    
    console.log(message)
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setMessage({
      ...message,
      sender: loggedUser,
      receiver: selected,
    });
    console.log(message)
    let response = await axios.post(
      "http://localhost:5000/asymm/message",
      message
    );
    console.log(response)
    setMessage({
      sender: "",
      message: "",
      receiver: "",
    });

    if (response.status === 200) {
      alert("Message sent");
    } else {
      alert("Message not sent");
    }
  };

  return (
    <section className={classes.body}>
      <h3>Message Form</h3>
      <form className={classes.form}>
        
        <select
          className={classes.select}
          name="receiver"
          onChange={(e) => setSelected(e.target.value)}
          onSubmit={handleChange}
        >
          <option value="none" disabled>Select a User</option>
          {users.map((user, index) => {
            return (
              <option value={user.name} key={index}>
                {user.name}
              </option>
            );
          })}
        </select>
        <textarea
          onChange={handleChange}
          value={message.message}
          name="message"
          type="text"
          placeholder="Message..."
        />
        <button onClick={submit} type="submit">
          Encrypt &amp; Send
        </button>
      </form>
    </section>
  );
};

export default MessageFormAsc;
