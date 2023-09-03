import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./chat.css"; 

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const base_url = "https://api.openai.com/v1";
  const openai_token = "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";

  const openai_header = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${openai_token}`
  };

  const sendMessage = async () => {
    
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage(""); 
      const data = {
        "model": "gpt-3.5-turbo",
        "messages":[
          {
            "role":"user",
            "content":`I want an answer for healt service assistant: ${newMessage}`
          }
        ]
      };
      try {
        const response = await axios.post(`${base_url}/chat/completions`,data, {
          headers: openai_header
        });
        const response_text = response.data.choices[0].message.content;
        console.log(response_text);
        // setAnswer(response_text);
       const botMessage = {text: response_text, sender:"bot"};
        
       
        setTimeout(() => {
          setMessages([...messages, { text: response_text, sender: "bot" }]);
        }, 1500);
      
        
      }
      catch(error) {
        console.log(error);
      }
    }
  };

  // useEffect(() => {
  //   // For demo purposes, simulation to receive a message after a few seconds
  //   if (messages[messages.length - 1]?.sender === "user") {
  //     setTimeout(() => {
  //       setMessages([...messages, { text: answ, sender: "bot" }]);
  //     }, 1500);
  //   }
  // }, [messages]);

  return (
    <div className="chatpage">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat with Support</h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user" : "bot"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
