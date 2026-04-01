const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'your_mongodb_connection_string';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// API routes
app.get('/api', (req, res) => {
    res.send('API is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
