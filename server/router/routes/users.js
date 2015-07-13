// This handles retrieving the list of users

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

var db = require('../../database');
var Users = db.users;

// Route middleware
router.use(function(req, res, next) {
	console.log("Something is happening in users!!");

	next();
});

// POST route for adding users
router.post('/', function (req,res) {
	var body = req.body;
	
	// Current time this occurred
	var time = moment().format('MMMM Do YYYY, h:mm:ss a');

	res.json({message: 'hooray! I am posting a user!'});

	// Check to see if the user already exists
	Users.findOne({
		'email': body.email
	}, function (err, user) {

		// If there's an error, log it and return to user
		if (err) {
			// Nice log message on your end, so that you can see what happened
			console.log('Couldn\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);

			// send the error
			res.status(500).json({
				'message': 'Internal server error from signing up new user. Please contact support@yourproject.com.'
			});
		}

		// If the user doesn't exist, create one
		if (!user) {
			console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(body.email));

			// setup the new user
			var newUser = new Users({
				firstname: body.firstName,
				lastname: body.lastName,
				email: body.email,
				password: body.confirmPwd
			});

			console.log("firstname: " + body.firstName);
			console.log("lastname: " + body.lastName);
			console.log("email: " + body.email);
			console.log("password: " + body.confirmPwd);

			// save the user to the database
			newUser.save(function (err, savedUser, numberAffected) {

				if (err) {
					console.log('Problem saving the user ' + color.yellow(body.email) + ' due to ' + err);
					res.status(500).json({
						'message': 'Database error trying to sign up.  Please contact support@yourproject.com.'
					});
				}

				// Log success and send the filtered user back
				console.log('Successfully created new user: ' + color.green(body.email));

				res.status(201).json({
					'message': 'Successfully created new user',
					'client': _.omit(savedUser, 'password')
				});

			});
		}

		// If the user already exists...
		if (user) {

			console.log('User ' + color.red(body.email) + ' already exists.');


			res.status(409).json({
				'message': body.email + ' already exists!'
			});
		}
	});
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