const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { name, email, password, photo } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ success: false, msg: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, photo });
        return res.status(201).json({ success: true, msg: "User created" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, msg: "User can't be registered, try later" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, msg: "Fill all details" });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, msg: "User not registered" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ success: false, msg: "Password incorrect" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' });
        return res.status(200).json({ success: true, token, user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, msg: "Login failed" });
    }
};
