import React, { useContext } from 'react'
import MessageContext from '../../MessageContext'
import classes from '../../styles/message.module.css'


const MessageAsc = ({message,sender}) => {

  const { setContent } = useContext(MessageContext);

  const switchContent = ( ) => {
    console.log(message);
    setContent(message);
  }

  return (
    <div className={classes.body} onClick={switchContent}>
        <h4>New Message for <span>{sender}</span></h4>
    </div>
  )
}

export default MessageAsc