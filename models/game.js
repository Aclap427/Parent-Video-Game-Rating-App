const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
    },
    recAge: {
        type: Number,
        min: 2,
        max: 18,
        default: 5,
    },
    reviewContent: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



let gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    avgRating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
    },
    history: {
        type: String,
    },
    whyPop: {
        type: String,
    },
    reviews: [reviewSchema]
}, {

    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);