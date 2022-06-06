import React from "react";
import { createContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [content, setContent] = useState(
    "Test content which serves no purpose currently"
  );
  const url = "http://192.168.43.168:5000";

  return (
    <MessageContext.Provider value={{ content, setContent, url }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
