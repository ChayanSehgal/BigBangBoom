// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model

// Get user details
router.get('/user', async (req, res) => {
    try {
        const users = await User.find({}, 'name email photo'); // Fetching specific fields
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
