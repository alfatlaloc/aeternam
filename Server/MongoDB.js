//Import the mongoose module
const mongoose = require('mongoose');
require('dotenv').config();

//Set up default mongoose connection
mongoose.connect(
    "mongodb+srv://aeternam:master.ae13@eurusd.yhq8o.mongodb.net/EURUSD?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to Database'))
module.exports = db;