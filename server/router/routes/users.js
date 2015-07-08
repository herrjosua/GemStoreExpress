// This handles retrieving the list of users

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();


// Include mongoose
// var mongoose = require('mongoose');

var db = require('../../database');
var Users = db.users;

//console.log("Do I have access to? " + usedDb)

//console.log(Users);

//console.log("mongoose status: " + mongoose.connection.readyState);

/* GET users listing. */
// router.get('/', function(req, res) {
// 	res.send('respond with a resource');
// 	//console.log(res);
// });

// // GET route for retrieving posts
router.get('/', function(req, res, next) {
	Users.find(function(err, users) {
		if (err) {
			return next(err);
		}

		res.json(users);
	});
});

// Pre-loading users
router.param('/user', function(req, res, next, id) {
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

// Get a single user
router.get('/user/:user', function(req, res) {
	res.json(req.user);
});

// // POST route
// router.post('/users', function(req, res, next) {
// 	var user = new Users(req.body);

// 	user.save(function(err, user) {
// 		if(err) {
// 			return next(err);
// 		}

// 		res.josn(user);
// 	});
// });

module.exports = router;
