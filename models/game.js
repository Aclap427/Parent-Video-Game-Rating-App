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
        },
        parent: { type: Schema.Types.ObjectId, ref: 'Parent' },
    },

    {
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
    image: {
        type: String,
        default: ""
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
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    },
    reviews: [reviewSchema]
}, {

    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);