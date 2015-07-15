/**
 * Schema for Products
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
	images: {},
	reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
	createdOn: {
		type: Date
	}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;