// src/components/JoinUs.js
import React from 'react';
import './JoinUs.css'; // Import your CSS file for styling

const JoinUs = () => {
    const socialMediaLinks = [
        { name: 'Facebook', icon: 'https://img.icons8.com/color/48/000000/facebook-new.png', url: 'https://www.facebook.com/' },
        { name: 'Twitter', icon: 'https://img.icons8.com/color/48/000000/twitter.png', url: 'https://twitter.com/' },
        { name: 'LinkedIn', icon: 'https://img.icons8.com/color/48/000000/linkedin.png', url: 'https://www.linkedin.com/' },
        { name: 'Instagram', icon: 'https://img.icons8.com/color/48/000000/instagram-new.png', url: 'https://www.instagram.com/' },
        { name: 'GitHub', icon: 'https://img.icons8.com/color/48/000000/github.png', url: 'https://github.com/' },
    ];

    return (
        <div className="join-us">
            <h1>Join Us Today!</h1>
            <p>Become a part of our vibrant community by signing up through your favorite platform:</p>
            <div className="social-media-icons">
                {socialMediaLinks.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default JoinUs;
