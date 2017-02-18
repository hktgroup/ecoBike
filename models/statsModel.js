var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var statSchema = new mongoose.Schema({
    distTravel: Number
    , calsBurned: Number
    , cEmission: Number
    , totalDist: Number
    , totalCals: Number
    , totalEmiss: Number
    , userID: String
});