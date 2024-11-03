// src/pages/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // Ensure this file exists and is linked correctly

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="sign-in-form">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="sign-in-input"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="sign-in-input"
                />
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
            <p className="sign-in-footer">
                Don't have an account? <a href="/join">Join here</a>
            </p>
        </div>
    );
};

export default SignIn;
