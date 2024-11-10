const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.post('/register', (req, res) => {
    // Register logic here
});

app.post('/login', (req, res) => {
    // Login logic here
});

app.post('/create-pet', (req, res) => {
    // Create pet profile
});

app.get('/pets', (req, res) => {
    // Fetch all pets for matching
});

exports.api = functions.https.onRequest(app);
