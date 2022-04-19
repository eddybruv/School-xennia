import React from "react";
import { createContext, useState,  } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [content,setContent] = useState('Test content which serves no purpose currently');

    return (
        <MessageContext.Provider value={{content,setContent}}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext;