// This handles retrieving of products

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Review = mongoose.model('Review');

// Route middleware
router.use(function(req, res, next) {
	console.log("Something is happening in products!!");
	next();
});

// GET route for all Products
// /products is coming from index.js
// /products/
router.get('/', function (req, res, next) {

	console.log("GETTING all products!");

	Product.find( function (err, products) {
		if (err) {
			return next(err);
		}

		res.json(products);
	});
});

// POST route for adding a Product
// /products is coming from index.js
// /products/
router.post('/', function (req, res, next) {

	console.log("POSTING a single product!");

	var product = new Product (req.body);

	product.save( function (err, post) {
		if(err) {
			return next(err);
		}

		res.json(product);
	});
});

// Pre-loading product object on routes with ':product'
router.param('product', function (req, res, next, id) {
	var query = Product.findById(id);

	console.log("Am I hitting my product param?");

	console.log("QUERING the product with an id of: " + id);

	query.exec( function (err, product) {
		if (err) {
			return next(err);
		}

		if(!product) {
			return next(new Error('can\'t find product'));
		}

		req.product = product;

		return next();
	});
});

// Pre-loading review object on routes with ':review'
router.param('review', function (req, res, next, id) {
	var query = Review.findById(id);

	console.log("Am I hitting my review param?");

	console.log("QUERING the product with an id of: " + id);


	query.exec( function (err, review) {
		if (err) {
			return next(err);
		}

		if(!review) {
			return next(new Error('can\'t find review'));
		}

		req.review = review;

		return next();
	})
});

// GET route for retrieving a single product
// /products is coming from index.js
// /products/:product
router.get('/:product', function (req, res, next) {

	console.log("GETTING a single product");

	req.product.populate('reviews', function (err, product) {
		if (err) {
			return next(err);
		}

		res.json(req.product);
	});
});

// POST route for creating a new review
// /products is coming from index.js
// /products/:product/reviews 
router.post('/:product/reviews', function (req, res, next) {

	console.log("POSTING a review for a product");

	var review = new Review(req.body);
	review.product = req.product;

	review.save( function (err, review){
		if (err) {
			return next(err);
		}

		req.product.reviews.push(review);
		req.product.save( function (err, product) {
			if (err) {
				return next(err);
			}

			res.json(review);
		});
	});
});

module.exports = router;