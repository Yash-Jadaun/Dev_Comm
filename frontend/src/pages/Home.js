// src/pages/Home.js

import React from 'react';
import './Home.css'; // Importing the CSS
// import heroImage from '../assets/hero-image.svg'; // Correct path for hero image
import feature1Image from '../assets/feature1.png'; // Correct path for feature 1
import feature2Image from '../assets/feature2.png'; // Correct path for feature 2
import feature3Image from '../assets/feature3.png'; // Correct path for feature 3
// import Chat from '../components/Chat'; // Import the Chat component
import Footer from '../components/Footer'; // Import the Footer component

const Home = () => {
    const discordLink = 'https://discord.com/channels/720788516837261322/735506302784110652/1299828155158364180'; // Replace with your Discord invite link

    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to the Developer Community</h1>
                <p>Join us to collaborate, share knowledge, and grow together!</p>
                <img src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Hero" className="hero-image" />
                <a href={discordLink} className="cta-button" target="_blank" rel="noopener noreferrer">
                    Join Us
                </a>
            </div> 
            <div className="features">
                <div className="feature-card">
                    <img src={feature1Image} alt="Feature 1" className="feature-image" />
                    <h3>Connect with Developers</h3>
                    <p>
                        Connect with like-minded developers and industry professionals. Our community provides a platform to
                        network, share experiences, and build relationships that can lead to collaborations on exciting
                        projects. Join discussions, attend events, and expand your professional circle.
                    </p>
                </div>
                <div className="feature-card">
                    <img src={feature2Image} alt="Feature 2" className="feature-image" />
                    <h3>Enhance Your Skills</h3>
                    <p>
                        Enhance your skills through collective learning. Our community is dedicated to sharing knowledge,
                        from coding tutorials to best practices in software development. Participate in workshops,
                        webinars, and Q&A sessions to stay updated with the latest trends and technologies in the industry.
                    </p>
                </div>
                <div className="feature-card">
                    <img src={feature3Image} alt="Feature 3" className="feature-image" />
                    <h3>Collaborate on Projects</h3>
                    <p>
                        Bring your ideas to life by collaborating with others. Whether you're looking for a team to
                        develop a project or seeking feedback on your work, our platform connects you with developers of
                        various skill levels. Work together on open-source projects, hackathons, or personal initiatives
                        and watch your visions come to fruition.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
