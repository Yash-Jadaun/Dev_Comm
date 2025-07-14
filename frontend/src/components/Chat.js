import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:4000'); // Connect to the server

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Listen for incoming messages
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage'); // Clean up listener on component unmount
        };
    }, []);

    const handleSendMessage = () => {
        if (input) {
            const message = { senderId: 'User1', recipientId: 'User2', messageText: input }; // Adjust as needed
            socket.emit('sendMessage', message); // Send message to server
            setInput('');
        }
    };

    return (
        <div className="chat-content">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.senderId}`}>
                        {msg.messageText}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="input-field"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
