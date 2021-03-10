const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Data = new Schema({
    Date: {
        type: Date,
        required: true

    },
    High: {
        type: Number,
        required: true
    },
    Low: {
        type: Number,
        required: true
    },
    Close: {
        type: Number,
        required: true
    },
    Open: {
        type: Number,
        required: true
    }
});

module.exports = { Data };