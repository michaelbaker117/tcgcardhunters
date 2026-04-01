const mongoose = require('mongoose');
const Card = require('./models/Card');

const sampleCards = [
    {
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attack: 3000,
        defense: 2500,
        level: 8,
        attribute: 'LIGHT',
        description: 'A legendary dragon that is said to be impossible to defeat.'
    },
    {
        name: 'Dark Magician',
        type: 'Monster',
        attack: 2500,
        defense: 2100,
        level: 7,
        attribute: 'DARK',
        description: 'The ultimate wizard in terms of attack and defense.'
    },
    {
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attack: 1000,
        defense: 1000,
        level: 3,
        attribute: 'DARK',
        description: 'When you have all five pieces of Exodia in your hand, you win the duel.'
    }
];

mongoose.connect('mongodb://localhost:27017/yugioh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected.');
        return Card.insertMany(sampleCards);
    })
    .then(() => {
        console.log('Sample cards added to database.');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB or adding sample cards:', err);
    });

module.exports = sampleCards;