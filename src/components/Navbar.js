// src/components/Navbar.js
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure your CSS is imported

const Navbar = () => {
    const [currMode, setCurrMode] = useState("light"); // Declare state for the current mode

    // Function to toggle the mode
    const toggleMode = () => {
        if (currMode === "light") {
            setCurrMode("dark");
            document.body.style.backgroundColor = "black";
        } else {
            setCurrMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Dev Community</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/tweets">Tweets</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/create-profile">Create Profile</Link></li>
                <li><Link to="/direct-messaging">Direct Messaging</Link></li>
                <Link to="/sign-in" className="sign-in">Sign In</Link>
            </ul>
            <Link to="/learn">
                <button className="create-post-button">Learn New Technologies</button>
            </Link>
            <div id="but">
                <button onClick={toggleMode}>
                    {currMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                </button>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
