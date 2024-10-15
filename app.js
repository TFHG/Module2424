const express = require('express');
const path = require('path');
const app = express();

// Serve the HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the index.html file
});

// Start the server on port 3000 (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;
