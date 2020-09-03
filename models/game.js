const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    rating: {
        type: Number,

    },
    recAge: {
        type: Number,

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
    img: {
        type: String,
        default: 'https://i.imgur.com/2TAHHIjm.png',
    },
    avgRating: {
        type: Number,
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