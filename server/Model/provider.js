const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    providername: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    servicetype: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    experince: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: false
    },
    image: {
        type: String,
        default: "https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        required: false
    },
    token: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('Provider', ProviderSchema)