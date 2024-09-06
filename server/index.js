// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const StudentModel=require('./models/student');
const User=require('./models/user');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI ='mongodb://localhost:27017/userss';
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define user schema
// app.js


// Middleware for session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Authentication middleware
const authenticateUser = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out successfully' });
});
app.post('/signup', async (req, res) => {
  try {
    const { name,email, password,usn } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new StudentModel({ name,email, password:hashedPassword,usn });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'An error occurred while signing up' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await StudentModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed. Incorrect password.' });
    }
    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});


app.put('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name,usn, email,branch, phone,year,event } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, { name,usn, email,branch, phone,year,event } , { new: true });
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
app.post('/add', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











