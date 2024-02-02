const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new mongoose.Schema({
    _bookingId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Booking'
    },
    token: {
        type: String,
        required: [true, 'Please enter your email']
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: {
            expires: 90000000
        }
    }
})

module.exports = new mongoose.model("Token", TokenSchema);