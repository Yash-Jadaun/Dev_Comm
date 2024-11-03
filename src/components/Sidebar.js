// Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Dev Community</h2>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Messages</li>
                <li>Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;
