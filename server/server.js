const express = require('express');
const app = express();
const PORT = 5000;

// What to return on a GET request
app.get("/api", (req, res) => {
    res.json({"string": "Hello from express!"});
});

// Listen to requests from the port 5000
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
