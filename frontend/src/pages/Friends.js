// src/pages/Friends.js
import React, { useState } from 'react';
import './Friends.css';
import Chat from '../components/Chat';

const friendsData = [
    { id: 1, name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Bob Smith', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 3, name: 'Charlie Brown', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 4, name: 'Diana Prince', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
];

const Friends = () => {
    const [activeChats, setActiveChats] = useState([]);

    const handleStartChat = (friend) => {
        if (!activeChats.some(chat => chat.id === friend.id)) {
            setActiveChats([...activeChats, friend]);
        }
    };

    const handleCloseChat = (id) => {
        setActiveChats(activeChats.filter(chat => chat.id !== id));
    };

    return (
        <div className="friends">
            <div className="friends-sidebar">
                <h2>Friends</h2>
                {friendsData.map(friend => (
                    <div key={friend.id} className="friend-item" onClick={() => handleStartChat(friend)}>
                        <img src={friend.image} alt={friend.name} className="friend-image" />
                        <span>{friend.name}</span>
                    </div>
                ))}
            </div>

            {activeChats.map(friend => (
                <div key={friend.id} className="chat-popup">
                    <div className="chat-header">
                        <span>{friend.name}</span>
                        <button className="close-chat-button" onClick={() => handleCloseChat(friend.id)}>
                            &times;
                        </button>
                    </div>
                    <Chat />
                </div>
            ))}
        </div>
    );
};

export default Friends;
