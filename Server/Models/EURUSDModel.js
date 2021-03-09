const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/aeternam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea

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

const Day = new Schema({ Name: { type: String, required: true }, Entries: [Data] });
const Week = new Schema({ Name: { type: String, required: true }, Days: [Day], Entries: [Data] });
const Month = new Schema({ Name: { type: String, required: true }, Weeks: [Week], Entries: [Data] });
const Year = new Schema({ Name: { type: String, required: true }, Months: [Month], Entries: [Data] });

const EURUSDSchema = new Schema({
    Years: [Year],
    Entries: [Data]
});

module.exports = mongoose.model("EURUSD", EURUSDSchema, "EURUSD");