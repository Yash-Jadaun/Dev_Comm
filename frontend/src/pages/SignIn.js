// src/pages/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // Make sure your CSS styles are still imported

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Sign In</button>
                <p className="join-option">
                    Don't have an account? <Link to="/sign-up" className="join-link">Join</Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
