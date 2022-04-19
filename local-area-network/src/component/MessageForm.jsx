import React from 'react'

import classes from '../styles/form.module.css';

const MessageForm = () => {
  return (
    <section className={classes.body}>
        <h3>Message Form</h3>
        <form className={classes.form}>
            <input type="text" placeholder="Name of Sender..." />
            <textarea type="text" placeholder="Message..." />
            <button type="submit">Send</button>
        </form>
    </section>
  )
}

export default MessageForm