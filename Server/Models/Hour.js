const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { Data } from './Schema';

mongoose.connect("mongodb://localhost:27017/aeternam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //Si no existe, se crea


const EURUSDHour = new Schema({
    Hour: Data
});

module.exports = mongoose.model("EURUSDHour", EURUSDHour, "EURUSDHour");