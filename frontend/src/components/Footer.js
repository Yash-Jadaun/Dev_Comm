// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is correctly imported
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> {/* Font Awesome Twitter Icon */}
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> {/* Font Awesome Instagram Icon */}
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn Icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
