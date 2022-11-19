let mongoose = require('mongoose');

// creating a car model
let carModel = mongoose.Schema({
    model: String,
    year: String,
    zeroSixty: String,
    topSpeed: String,
    description: String,
    price: String
    },
    {
        collection: "cars"
    }
);
module.exports = mongoose.model('Car',carModel);