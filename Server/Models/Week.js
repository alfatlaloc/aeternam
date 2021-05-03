const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://aeternam:master.ae13@eurusd.yhq8o.mongodb.net/EURUSD?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea


const EURUSDWeek = new Schema({
    keyName: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
        unique: true
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
    },
    Change: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("EURUSDWeek", EURUSDWeek, "EURUSDWeek");