const express = require('express');
const router = express.Router();

// Sample data for cards; in real application, this would come from a database
const cards = [  
    { id: 1, name: 'Card 1', description: 'Description for Card 1' },  
    { id: 2, name: 'Card 2', description: 'Description for Card 2' },  
    { id: 3, name: 'Card 3', description: 'Description for Card 3' }
];

// GET endpoint to retrieve all cards
router.get('/', (req, res) => {  
    res.json(cards);  
});

module.exports = router;