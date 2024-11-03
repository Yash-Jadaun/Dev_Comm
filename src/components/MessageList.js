import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <strong>{message.sender}</strong>: {message.content}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
