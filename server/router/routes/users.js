// This handles retrieving the list of users

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var db = require('../../database');
var Users = db.users;

// POST route for adding users?
router.post('/', function (req,res) {
	//var user = new User(req.body);

	// QUESTION this is currently in the signup route. Should this be moved here??

});

// GET route for retrieving users
router.get('/', function(req, res, next) {
	Users.find(function(err, users) {
		if (err) {
			return next(err);
		}

		res.json(users);
		console.log(users);
	});
});

// Pre-loading users
router.param('/', function(req, res, next, id) {
	var query = Users.findById(id);

	query.exec(function (err, user) {
		if (err) {
			return next(err);
		}

		if (!user) {
			return next(new Error('can\'t find user'));
		}

		req.user = user;

		return next();
	});
});

// GET route for a single user
router.get('/:id', function(req, res) {
	Users.findById(req.params.id, function(err, user) {
		if (err) {
			return next(err);
		}

		res.json(user);
		console.log(user);
	});

});

// PUT route for a single user
router.put('/:id', function(req, res) {

})

// DELETE route for a single user
router.delete('/:id', function(req, res) {

	Users.findByIdAndRemove(req.params.id, req.body, function (err, user) {
		if (err) {
			return next(err);
		}

		res.json(user);
	});
});

module.exports = router;