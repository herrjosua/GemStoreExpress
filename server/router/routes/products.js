// This handles retrieving of products

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

// Access to Database
var db = require('../../database');
var Products = db.products;

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

	var body = req.body;

	// Current time this occurred
	var time = moment().format('MMMM Do YYYY, h:mm:ss a');

	//ISSUE: The function below is running after the new entry has been already saved to the database
	
	Products.findOne({
		'name': body.name
	}, function (err, product) {

		// If there is an error
		if (err) {
			// Nice log message on your end, so that you can see what happened
			console.log('Couldn\'t create new product at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);

			// send the error
			res.status(500).json({
				'message': 'Internal server error from creating a new product. Please contact support@yourproject.com.'
			});
		}

		// If the Product does not exist
		if (!product) {
			var newProduct = new Product (req.body);

			newProduct.save( function (err, savedPost) {
				if(err) {
					return next(err);
				}

				res.json(savedPost);

				res.status(201).json({
					'message': body.name + ' created!'
				});
			});
		}

		// If the Product already exists
		if (product) {
			console.log('Product ' + color.red(body.email) + ' already exists.');

			res.status(409).json({
				'message': body.name + 'already exists!'
			});
		}
	});
});

// Pre-loading product object on routes with ':product'
router.param('product', function (req, res, next, id) {
	var query = Product.findById(id);

	console.log("Am I hitting my product param?");

	console.log("QUERING the product with an id of: " + id);

	query.exec( function (err, product) {
		if (err) {return next(err);}

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
		if (err) {return next(err);}

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
		if (err) {return next(err);}

		res.json(req.product);
	});
});

// POST route for creating a new review
// /products is coming from index.js
// /products/:product/reviews 
router.post('/:product/review', function (req, res, next) {

	console.log("POSTING a review for a product");

	var review = new Review(req.body);
	review.product = req.product;

	review.save( function (err, review){
		if (err) {return next(err);}

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