// src/components/MessageInput.js
import React, { useState } from 'react';
import './DirectMessaging.css'; // Import the CSS file for styling

const MessageInput = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue(''); // Clear input after sending
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;
