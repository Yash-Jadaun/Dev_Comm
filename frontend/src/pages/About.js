import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>Welcome to the Developer Community!</p>
                    <p>In an ever-evolving tech landscape, we believe that collaboration is the key to innovation. Our community is dedicated to bringing together developers, tech enthusiasts, and learners from all walks of life. Whether you are a seasoned professional or just starting your journey in the world of programming, you will find a home here.</p>
                </div>
                <img src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif" alt="Developer Community" className="about-image" />
            </div>

            <h3>Our Mission</h3>
            <p className="mission-text">Our mission is to create an inclusive platform where individuals can connect, share knowledge, and grow together. We provide a space for members to engage in meaningful discussions, participate in skill-building activities, and collaborate on projects that push the boundaries of what is possible.</p>
            
            <div className="mission-image-container">
                <img src="https://media.giphy.com/media/jpZvG8KmaVtF6/source.gif" alt="Networking" className="mission-image" />
                <img src="https://cdn.dribbble.com/users/2436871/screenshots/5708416/________.gif" alt="Learning Resources" className="mission-image" />
                <img src="https://media.giphy.com/media/9AUI1HHGTnz7a/source.gif" alt="Collaboration Opportunities" className="mission-image" />
            </div>

            <h3>What We Offer</h3>
            <ul className="offer-list">
                <li><strong>Networking</strong>: Connect with industry experts, mentors, and peers who share your passion for technology. Our events and forums facilitate discussions that inspire growth and foster new ideas.</li>
                <li><strong>Learning Resources</strong>: Access a wealth of resources, including tutorials, webinars, and workshops designed to enhance your skills and keep you updated with the latest industry trends.</li>
                <li><strong>Collaboration Opportunities</strong>: Work on exciting projects with fellow community members. Whether it’s a group hackathon or an open-source initiative, you’ll find opportunities to collaborate and make a real impact.</li>
            </ul>

            <h3>Join Us Today!</h3>
            <p className="join-text">Become a part of our vibrant community where you can share your experiences, learn from others, and contribute to projects that matter. Together, we can build a better future in technology!</p>
        </div>
    );
};

export default About;
