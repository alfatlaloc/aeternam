const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { Data } from './Schema';

mongoose.connect("mongodb://localhost:27017/aeternam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea


const EURUSDDay = new Schema({
    Years: Data
});

module.exports = mongoose.model("EURUSDDay", EURUSDDay, "EURUSDDay");