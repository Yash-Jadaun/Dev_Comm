import React from 'react';
import './Card.css';

const Card = ({ title, content, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
            <button className="card-button">Read More</button>
        </div>
    );
};

export default Card;
