const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/aeternam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea


const EURUSDMonth = new Schema({
    keyName: {
        type: String,
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
    Annual_Change: {
        type: Number,
        required: true
    },
    ACP: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("EURUSDMonth", EURUSDMonth, "EURUSDMonth");