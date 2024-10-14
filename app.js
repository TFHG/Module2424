const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Do not call app.listen() when testing. Export the app for Supertest.
module.exports = app;
