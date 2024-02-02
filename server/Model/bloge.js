const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('blog', BlogeSchema)