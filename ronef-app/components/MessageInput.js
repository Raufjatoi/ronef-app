// components/MessageInput.js
import React from 'react';

const MessageInput = () => {
  return (
    <div id="message-input">
      <input type="text" id="message-input-field" placeholder="Type your message..." />
      <button id="send-button">Send</button>
    </div>
  );
};

export default MessageInput;
