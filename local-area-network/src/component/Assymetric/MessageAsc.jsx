import React, { useContext } from 'react'
import MessageContext from '../../MessageContext'
import classes from '../../styles/message.module.css'


const MessageAsc = ({message,sender,receiver}) => {

  const { setContent } = useContext(MessageContext);

  const switchContent = ( ) => {
    setContent(message);
  }

  return (
    <div className={classes.body} onClick={switchContent}>
        <h4>New Message for <span>{receiver}</span></h4>
        <p>Sender: {sender}</p>
    </div>
  )
}

export default MessageAsc