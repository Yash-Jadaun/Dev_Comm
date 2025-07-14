import React from 'react';
import './Events.css'; // Import your CSS file for styling

const eventsData = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: 'March 15, 2024',
    description: 'Join us for a day of networking, learning, and innovation in the tech industry.',
    image: 'https://global-uploads.webflow.com/637cea42f55f4c602965f7a4/63e118baaa93652e7dc220cd_Websummit.jpg'
  },
  {
    id: 2,
    title: 'Coding Bootcamp',
    date: 'April 10, 2024',
    description: 'A hands-on bootcamp where you can learn coding from industry experts.',
    image: 'https://th.bing.com/th/id/OIP.85ylJNunNaZqNrWcet736AHaD5?rs=1&pid=ImgDetMain'
  },
  {
    id: 3,
    title: 'Open Source Hackathon',
    date: 'May 22, 2024',
    description: 'Collaborate with fellow developers to create impactful open-source projects.',
    image: 'https://supabase.com/images/blog/oss-hackathon/thumbnail.png'
  },
];

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
