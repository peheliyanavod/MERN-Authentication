const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB is connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/auth", require("./routes/user"));

// Port Configuration
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
