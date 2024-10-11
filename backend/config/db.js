const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Not needed with newer versions but can help in debugging
            useUnifiedTopology: true // Not needed with newer versions but can help in debugging
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Database connection failed:", err);
        process.exit(1); // Optional: Exit the process if the database connection fails
    }
};

module.exports = dbConnect;
