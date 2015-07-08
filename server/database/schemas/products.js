/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	shine: {
		type: Number,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	rarity: {
		type: Number,
		require: true,
	},
	color: {
		type: String,
		require: true,
	},
	faces: {
		type: Number,
		require: true,
	},
	images: {

	},
	reviews: {

	}
});

// Methods to Add, Update, and Remove Products


var Product = mongoose.model('Product', productSchema);

module.exports = Product;