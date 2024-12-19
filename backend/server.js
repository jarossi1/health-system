
// Loading environment variables
require('dotenv').config();

// Importing required modules
const express = require('express'); // Express web framework for HTTP requests
const cors = require('cors'); // Middleware for enabling CORS for cross-origin requests
const app = express(); // Creating an Express app

app.use(cors()); // Enabling CORS for cross-origin requests
app.use(express.json()); // Middleware for parsing JSON request bodies

// Configuring MySQL database connection
const mysql = require('mysql2');  // MySQL library

// Creating a connection to the MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connecting to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// API endpoint for fetching user data from the database
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err); // Log the exact error
            res.status(500).json({ error: 'Error fetching users', details: err }); // Include error details in the response
        } else {
            console.log('Fetched users:', results); // Log the query result
            res.json(results);
        }
    });
});

app.post("/api/users", (req, res) => {
    const q = "INSERT INTO users (`name`, `email`, `department`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.department
    ];



    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("User has been created successfully.");
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
