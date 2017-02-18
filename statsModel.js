var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
	//create models and schemas here.
});

mongoose.connect('mongodb://127.0.0.1:27017');


var statSchema = new mongoose.Schema({
	distTravel: Number
	calsBurned: Number
	cEmission: Number
	totalDist: Number
	totalCals: Number
	totalEmiss: Number
	userID: String
});


var Stats = mongoose.model('Stats', statSchema);


//Example Document.
var stats1 = new Stats({
	distTravel: 10
	calsBurned: 150
	cEmission: 1
	totalDist: 10
	totalCals: 150
	totalEmiss: 1
	userID: ObjectID('');

});

/* Queries */

//ENTER STATS DATA
data.Stats.insert({
	distTravel: Number
	calsBurned: Number
	cEmission: Number
	totalDist: Number
	totalCals: Number
	totalEmiss: Number
	userID: String

});

//RETRIEVE STATS DATA
db.Stats.getStats({ userID : String }, function(err, stats){

	if(err) return console.error(err);
	console.dir(stats);
});

//UPDATE ALL STATS DATA
db.Stats.updateAll({'userID': 'STRING'},{$set{<NEW FIELD HERE>}},{multi: true}); 

//UPDATE SPECIFIC STATS FIELDS


db.Stats.update({'totalDist' : 'Number'},{$set{<UPDATED DATA>}});
db.Stats.update({'cEmission' : 'Number'},{$set{<UPDATED DATA>}});
db.Stats.update({'calsBurned' : 'Number'},{$set{<UPDATED DATA>}});
db.Stats.update({'distTravel': 'Number'},{$set{<UPDATED DATA>}});
db.Stats.update({'totalCals' : 'Number'},{$set{<UPDATED DATA>}});
db.Stats.update({'totalEmiss' : 'Number'},{$set{<UPDATED DATA>}});
