// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Tweets from './pages/Tweets';
import Contact from './pages/Contact';
import Join from './pages/Learn'; // Import the Join page component
import UserProfile from './components/userProfile';
import DirectMessaging from './components/DirectMessaging'; // Import DirectMessaging component

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/tweets" element={<Tweets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/join" element={<Join />} /> {/* Route for the Join page */}
                <Route path="/create-profile" element={<UserProfile />} />
                <Route path="/direct-messaging" element={<DirectMessaging />} /> {/* Route for Direct Messaging */}
            </Routes>
        </Router>
    );
}

export default App;
