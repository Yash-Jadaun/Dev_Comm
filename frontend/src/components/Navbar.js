// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [currMode, setCurrMode] = useState("light");

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
        <nav className={`navbar ${currMode}`}>
            <div className="navbar-logo">Dev Community</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/friends">Friends</Link></li>
              
                <li><Link to="/sign-up" className="signup">Sign Up</Link></li>
                <li><Link to="/sign-in" className="signin">Sign In</Link></li>
            </ul>
            <button className="mode-toggle" onClick={toggleMode}>
                <FontAwesomeIcon icon={currMode === "light" ? faMoon : faSun} />
            </button>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
