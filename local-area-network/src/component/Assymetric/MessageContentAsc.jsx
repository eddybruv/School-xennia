import React, { useState } from "react";
import { useContext } from "react";

import MessageContext from "../../MessageContext";

import classes from "../../styles/content.module.css";

import { decryptAll } from '../../cipherAsc'

const MessageContentAsc = () => {
  let { content } = useContext(MessageContext);
  const [deMessage, setDeMessage] = useState(content);
  const [showDecrypted, setShowDecrypted] = useState(false)
  // let content = '1234'
  const [key, setKey] = useState(null);
  const prKey = sessionStorage.getItem('privateKey');

  const toText = function(cipher){
    let text = ''
    cipher = cipher.split('-');
    for(let i = 0; i < cipher.length; i++){
      text += String.fromCharCode(cipher[i]);
    }
    return text
  }

  const displayKey = ()=>{
    setKey(prKey);
  }

  const hideKey = () => {
    setKey('');
  }

  const handleDecryption = () => {
    let decrypted = decryptAll(content, prKey);
    setShowDecrypted(true);
    setDeMessage(decrypted);
  }

  return (
    <section className={classes.body}>
      <h3>Message Content</h3>
      <div>{toText(content)}</div>
      <div style={{width: '100%',minWidth: '15rem'}}>
        <div style={{width: '100%'}} onMouseEnter={displayKey} onMouseLeave={hideKey} >
          <input type="text" disabled id="keyField" onClick={displayKey}  value={key} className={classes.keyField} placeholder="Hover To View Your Private Key" />
        </div>
        <button onClick={handleDecryption} type="button">
          Decrypt
        </button>
      </div>
      <h3>Decrypted Message</h3>
      <div>{!showDecrypted ? "NOTHING DECRYPTED YET" : deMessage}</div>
    </section>
  );
};

export default MessageContentAsc;
