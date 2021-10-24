var mongoose = require('mongoose');
require("dotenv").config()
const {MONGODB} = process.env
var mongoUri = MONGODB;

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri, {
})
var db = mongoose.connection

db.on('error', function () {
    console.log("Database error")
})
db.once('open', function () {
    console.log('mongodb connection established')
})

module.exports = db;
