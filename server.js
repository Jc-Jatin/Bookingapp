const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'booking_appointments'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database');
        return;
    }
    console.log('Connected to database');
});

// API endpoint for creating a new appointment
app.post('/appointments', (req, res) => {
    const { name, date, time } = req.body;

    if (!name || !date || !time) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    const appointment = { name, date, time };

    db.query('INSERT INTO appointments SET ?', appointment, (err, result) => {
        if (err) {
            console.error('Error inserting appointment into database');
            return res.sendStatus(500);
        }

        return res.sendStatus(201);
    });
});

// API endpoint for getting all appointments
app.get('/appointments', (req, res) => {
    db.query('SELECT * FROM appointments', (err, results) => {
        if (err) {
            console.error('Error getting appointments from database');
            return res.sendStatus(500);
        }

        return res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
