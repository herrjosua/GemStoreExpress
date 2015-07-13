// Top level of routes

module.exports = function (app) {
	// The users route
	app.use('/users', require('./routes/users'));

	// The products route
	app.use('/products', require('./routes/products'));
}