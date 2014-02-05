var data = require("../data.json");

exports.addFriend = function(req, res) {
	var newName = req.query.name;
	var newDescription = req.query.description;
	var newImageURL = "http://lorempixel.com/400/400/people";
	var newFriend = {
		"name": newName,
		"description": newDescription,
		"imageURL": newImageURL
	};
	//console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add', data);
};