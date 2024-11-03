// src/components/DirectMessaging.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './DirectMessaging.css'; // Import the CSS file

const DirectMessaging = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (content) => {
        const newMessage = {
            sender: 'User', // Replace with actual user data if available
            content: content,
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="direct-messaging">
            <h2>Direct Messaging</h2>
            <div className="message-list">
                {messages.map((msg, index) => (
                    <div key={index} className={`message sender`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <MessageInput onSend={handleSendMessage} />
        </div>
    );
};

export default DirectMessaging;
