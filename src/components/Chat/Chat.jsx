import React, { useState, useEffect } from "react";
import "./chat.css"; 

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage(""); 
    }
  };

  useEffect(() => {
    // For demo purposes, simulation to receive a message after a few seconds
    if (messages[messages.length - 1]?.sender === "user") {
      setTimeout(() => {
        setMessages([...messages, { text: "Hi there!", sender: "bot" }]);
      }, 1500);
    }
  }, [messages]);

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
