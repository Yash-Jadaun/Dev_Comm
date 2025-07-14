// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Friends from './pages/Friends';
import Chat from './components/Chat'; // Ensure Chat is only included here
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Footer from './components/Footer'; // Import the Footer component
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/chat" element={<Chat />} /> {/* Chat route only */}
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={Footer} />
            </Routes>
        </Router>
    );
}

export default App;
