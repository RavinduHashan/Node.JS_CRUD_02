const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    age: String
})

module.exports = mongoose.model('user', userModel)