// components/ChatWindow.js
import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { content: inputValue, sender: 'Me' }]);
      setInputValue('');
    }
  };

  return (
    <div id="chat-window">
      {messages.map((message, index) => (
        <div className="message" key={index}>
          <span className="sender">{message.sender}: </span>
          <span className="content">{message.content}</span>
        </div>
      ))}
      <div id="message-input">
        <input
          type="text"
          id="message-input-field"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="send-button" onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
