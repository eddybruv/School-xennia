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
    name: "",
    message: "",
  });

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if(selected) console.log(selected);

  }, [selected]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const submit = async (e) => {
    let response = await axios.post("http://172.20.10.13:5000/", message);
    setMessage({
      name: "",
      message: "",
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
        <input
          onChange={handleChange}
          value={message.name}
          name="name"
          type="text"
          placeholder="Name of Sender..."
        />
        <select className={classes.select} onChange={(e) => setSelected(e.target.value)}>
          {users.map((user,index) => {
            return <option value={user.name} key={index}>{user.name}</option>
          })}
        </select>
        <textarea
          onChange={handleChange}
          value={message.message}
          name="message"
          type="text"
          placeholder="Message..."
        />
        <button onClick={submit} type="button">
          Encrypt &amp; Send
        </button>
      </form>
    </section>
  );
};

export default MessageFormAsc;
