/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstname: {
		type: String,
		require: true,
	},
	lastname: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	},
	profile: {}
});

// A method that's called everytime a user document is saved..
userSchema.pre('save', function (next) {

	var user = this;

	// If the password hasn't been modified, move along...
	if (!user.isModified('password')) {
		return next();
	}

	// generate salt
	bcrypt.genSalt(10, function(err, salt){
		if (err){
			return next(err);
		}

		// create the hash and store it
		bcrypt.hash(user.password, salt, function(err, hash){

			console.log("What is salt? " + salt);

			if (err) {
				return next(err);
			}

			user.password = hash;
			next();
		});
	});
});

//userSchema.methods.delete = function(req, res, next) {

	//var user = this;

	//user.remove

//}

userSchema.methods.comparePassword = function (triedPassword, cb) {
	bcrypt.compare(triedPassword, this.password, function(err, isMatch) {
		if (err) {
			return cb(err)
		};

		cb(null, isMatch);
	});
};

var User = mongoose.model('User', userSchema);

module.exports = User;