
# GemStoreExpress
* Git repository: [GemStoreExpress](https://github.com/herrjosua/GemStoreExpress.git)
* Author: Joshua Bock
* Email: Josh@JoshuaBock.com
* URL: [Portfolio Website](joshuabock.com)
* Description:  AngularJS Project based off the following projects
    * [Shaping up with AngularJS](https://www.codeschool.com/courses/shaping-up-with-angular-js/ "Shaping up with AngularJS")
    * [Yeoman](http://yeoman.io/codelab.html/ "Yeoman Tutorial")
    * [Building an Angular & Express App &mdash; Part 1](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/ "Building an Eangular & Express App &mdash; Part 1")
    * [Building an Angular & Express App &mdash; Part 2](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/ "Building an Eangular & Express App &mdash; Part 2")
    * [Building an Angular & Express App &mdash; Part 3](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-3/ "Building an Eangular & Express App &mdash; Part 3")
    * [Mean-Stack Tutorial &mdash; Adding Authentication via Passport](https://thinkster.io/mean-stack-tutorial/ "Mean-Stack Tutorial &mdash; Adding Authentication via Passport")


## Change Log

### 07/13/2015

* **Added** [ncuillery angular-breadcrumb](http://github.com/ncuillery/angular-breadcrumb/) "Angular-Breadcrumb" to `client/bower.json` dependencies
* **Modified** adjusted template for `ncuillery angular-breadcrumb` by creating a custom directive template in my `directives` directory
* **Modified/Added** a config in `client/app/scripts/app.js` for `ncuillery angular-breadcrumb` to correctly name the breadcrumb labels based on state name &mdash; Product details labels is the product name
* **Added** `jsonwebtoken`, `passport`, `passport-local`, and `express-jwt` to `server/package.json` dependencies for Authenthication
* **Added** `source` directory to the root of the project with sample JSON data, and mongo shell help text
* **Added** `product-gallery`, `product-stars`, and product description templates
* **Modified** `controllers`, and `directives` directory structure by adding a subfolders for each component $mdash; for example added a `main` directory for the `main.js` controller, and likewise added a `breadcrumbs` directory for the `breadcrumbs.html` template.
* **Modified** added `-controller` suffix to all controllers, and added `directive` suffix for all directives
* **Modified** LESS styles for newly added templates
* **Added** added images from original GemStore project in the `client/images` directory.
* **Modified** Formatting `READMD.md` and `CHANGELOG.md`

### 07/14/2015

* **Added** ~~POST route for adding a product in `server/router/routes/products.js`~~
* **Modified** Commented old routes in `server/router/routes/products.js`
* **Added** Imports for `mongoose` and `Product` schema in `server/router/routes/products.js`
* **Modified** Rewrote routes for `products` in `server/router/routes/products.js`
* **Added** New schema for `Reviews` and linked with the `Product` schema