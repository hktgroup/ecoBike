 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var totalSchema = new mongoose.Schema({
     totalDist: Number
     , totalCals: Number
     , totalEmiss: Number
     , userID: String
 });