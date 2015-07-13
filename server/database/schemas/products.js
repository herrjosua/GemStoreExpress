/**
 * Our Schema for Products
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
		stars: {
			type: Number,
			require: true,
		},
		review: {
			type: String,
			require: true,
		},
		author: {
			type: String,
			require: true,
		},
		createdOn: {
			type: Date,
			require: true,
		}
	}
});

//productSchema.pre('save', function (next) {

//});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;