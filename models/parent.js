const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
let Schema = mongoose.Schema;


let parentSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
}, {
    timestamps: true
});



module.exports = mongoose.model('Parent', parentSchema);