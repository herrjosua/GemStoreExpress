/**
 * Schema for Product Reviews
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	stars: {
		type: Number
	},
	review: {
		type: String
	},
	author: {
		type: String
	},
	createdOn: {
		type: Date
	}
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;