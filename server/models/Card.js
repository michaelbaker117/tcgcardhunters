const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    rarity: { type: String, required: true },
    set: { type: String },
    number: { type: String },
    imageUrl: { type: String },
    power: { type: Number },
    toughness: { type: Number },
    abilities: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;