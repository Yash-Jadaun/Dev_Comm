const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config(); // For loading environment variables

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// User schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [String],
    experience: { type: Number, default: 0 }
});
const User = mongoose.model('User', userSchema);

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json()); // Middleware to parse JSON

// Sign Up endpoint
app.post('/signup', async (req, res) => {
    try {
        const { name, email, skills, experience } = req.body;
        const newUser = new User({ name, email, skills, experience });
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

// Get developers based on skills
app.get('/developers', async (req, res) => {
    try {
        const skill = req.query.skill;
        const developers = await User.find({ skills: skill });
        res.json(developers);
    } catch (error) {
        console.error('Error fetching developers:', error);
        res.status(500).send('Error fetching developers');
    }
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('sendMessage', (message) => {
        console.log('Message received:', message);
        io.emit('receiveMessage', message);  // Broadcast to all connected clients
    });
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
