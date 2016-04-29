var path = require('path');
var allFriends 		= require('../data/friends.js');


module.exports = function(app){

app.get('/api/survey', function(req, res){
		res.json(allFriends);
	});

app.post('/api/survey', function(req, res){

	allFriends.push(req.body);

	//LOGIC

		// if(tableData.length < 5 ){
		// 	allFriends.push(req.body);
		// 	res.json(true); // KEY LINE
		// }

		// else{
		// 	waitListData.push(req.body);
		// 	res.json(false); // KEY LINE
		// }

	});
}