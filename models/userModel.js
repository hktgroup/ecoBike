var mongoose = require('mongoose');
var Schema = mongoose.Schema
var db = mongoose.connection;
var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    }
    , password: {
        type: String,
        required: true
    }
    , userID: String
    , name: String
    , gender: String
});
