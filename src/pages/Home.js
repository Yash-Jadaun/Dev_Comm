// src/pages/Home.js
import React from 'react';
import UserProfile from '../components/userProfile'; // Ensure the correct path to UserProfile
import Card from '../components/Card';
import './Home.css';

const Home = () => {
    const cardsData = [
        {
            title: "Learn React",
            content: "React is a JavaScript library for building user interfaces.",
            imageUrl: "https://th.bing.com/th/id/OIP.lvR5nni7xdPCxU-tC6tzzgHaHa?rs=1&pid=ImgDetMain" // Updated image URL
        },
        {
            title: "Learn JavaScript",
            content: "JavaScript is a programming language that enables you to create dynamic web content.",
            imageUrl: "https://th.bing.com/th/id/R.35fde9e2f21022536029356e95c86faa?rik=tKrXgn2dvVJqAw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png&ehk=EYrDqaaPfX6%2fHeLEOTnVTnshumwnFWj06e8qHpLVHko%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            title: "Learn CSS",
            content: "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
            imageUrl: "https://th.bing.com/th/id/OIP.dLNBxINIoZfqGZeDNOs7WQHaHa?rs=1&pid=ImgDetMain"
        },
        {
            title: "Learn Node.js",
            content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
            imageUrl: "https://th.bing.com/th/id/OIP._ncjEfx3bNUP11cS2a4cqQHaHa?rs=1&pid=ImgDetMain"
        },
    ];

    return (
        <div className="home">
            <h1 id='text'>Welcome to the Developer Community</h1>
            
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Home;
