const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    servicename: {
        type: String,
        required: true
    },
    servicetype: {
        type: String,
        required: true
    },
    serviceno: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Service', ServiceSchema)