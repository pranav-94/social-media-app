```javascript
require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/index'); // Assuming this is the main router for v1
const cors = require('cors');

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all origins

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running!'); // More descriptive message
});

// API v1 routes
app.use('/api/v1', userRouter);

// Basic 404 handler
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Something broke!'); // Send a generic error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```