var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){

	//create your schemas and models here.

});

mongoose.connect('mongodb://127.0.0.1:27017');


var userSchema = new mongoose.Schema({
	userName: {
		type: String
		required: true
		unique: true
	}
	password: { 
		type: String
		required: true
	}
	userID: String
	name: String
	gender: String
});

var User = mongoose.model('User', userSchema);

//Example Document.
var user1 = new User({
	userName: 'pratm9293@yahoo.com';
	password: '12456';
	userID: ObjectID('');
	name: 'Prateek';
	gender: 'Male';
});

/* Queries */

//INSERT USER
db.User.insert({
	userName: {
		type: String
		required: true
		unique: true
	}
	password: { 
		type: String
		required: true
	}
	userID: String
	name: String
	gender: String

});

//RETRIEVE USER
db.User.getUser({ userID : String }, function(err, user){

	if(err) return console.error(err);
	console.dir(user);
});

//UPDATE ALL USERS
db.User.updateAll({'userID': 'STRING'},{$set{<NEW FIELD HERE>}},{multi: true}); 

//UPDATE SPECIFIC USER FIELDS

db.User.update({'userName' : 'String'},{$set{<UPDATED DATA>}});
db.User.update({'password' : 'String'},{$set{<UPDATED DATA>}});
db.User.update({'name' : 'String'},{$set{<UPDATED DATA>}});
db.User.update({'gender': 'String'},{$set{<UPDATED DATA>}});
