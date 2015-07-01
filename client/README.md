# gem-store-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

* Run `grunt` for building

*  `grunt serve` for preview

	* add `verbose` for detailed log

## Git Basics

### Windows

* Use Git Bash

* To Update Repository

	*  `git pull` to pull latest from repository

* To Push Changes

	*  `git status` to see what has changed 

	*  `git add file` to add/update files

	* `git commit -m "message contents"` to add/update files

## Testing

Running `grunt test` will run the unit tests with karma.

## Yeoman-generated app directory

### root

* LESS -- where LESS files are kept

* src/vendor -- Where Bower stores our packages - bower.json: our JavaScript/web dependencies, installed by Bower

* test -- a scaffolded out test runner and the unit tests for the project, including boilerplate tests for our controllers.

### app: a parent directory for our web application

* index.html: the base html file for our Angular app

* 404.html, favicon.ico, and robots.txt: commonly used web files so you don’t have to create them yourself

* scripts

	* controllers: our Angular controllers

	* directives: our Angular directives

	* filters:  our Angular filters

	* services: our Angular services

	* app.js: our main Angular application code

* styles:  our CSS files including the compiled LESS file

* views: a place for our Angular templates

### Gruntfile.js, package.json, and node_modules: configuration and dependencies required by our Grunt tasks

#### Change Log

* grunt-autoprefixer is being deprecated
* Using grunt-postcss instrad of grunt-autoprefixer -- Not sure this is needed
* Issue with grunt-contrib-imagemin https://github.com/gruntjs/grunt-contrib-imagemin/issues/96
	* Updated to ^0.9.4
	* Has been commented out of the build due to issues


