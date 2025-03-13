const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser")

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

// Serve static files correctly
app.use(express.static(path.join(__dirname, "../vite-project/dist") ))

// Catch-all route to serve index.html only for page requests
app.get("*", (req, res, next) => {
    if (req.path.includes(".")) {
        next(); // Allow static files (JS, CSS, images)
    } else {
        res.sendFile(path.join(__dirname, "../vite-project/dist/index.html"));
    }
});

// Connect to MongoDB
mdb.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => {
        console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection unsuccessful:", err.message);
    });

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server started successfully on http://localhost:${port}`);
});
