var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var statSchema = new mongoose.Schema({
    distTravel: Number
    , calsBurned: Number
    , cEmission: Number
    , userID: String
});