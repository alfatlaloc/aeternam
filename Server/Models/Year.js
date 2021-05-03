const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://aeternam:master.ae13@eurusd.yhq8o.mongodb.net/EURUSD?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea

const EURUSDYear = new Schema({
    keyName: {
        type: Number,
        required: true,
        unique: true
    },
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
    },
    Annual_Change: {
        type: Number,
        required: true
    },
    ACP: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("EURUSDYear", EURUSDYear, "EURUSDYear");