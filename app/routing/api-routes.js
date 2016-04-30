var path = require('path');
var allFriends 		= require('../data/friends.js');


module.exports = function(app){

app.get('/api/survey', function(req, res){
		res.json(allFriends);
	});

app.post('/api/survey', function(req, res){

	var newFriend = req.body;

	// newFriend.answers[0]

	console.log(allFriends[2]);

	allFriends.push(newFriend);





	});
}