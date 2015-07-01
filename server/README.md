# Building an Angular & Express App - Part 1 Notes
URL: http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

## Server Notes

To run on Windows -- Choice one option:

### Option 1

* `angularExpress/server/package.json`

		* Change line 6 from "start": "NODE_ENV=production nodemon ./bin/www", to "start": "production.sh",

		* Change line 7 from  "test": "NODE_ENV=development nodemon ./bin/www" to "test": "test.sh"

### Option 2

* Rename `angularExpress/server/package.json` to `angularExpress/server/package-MAC.json`

* Rename `angularExpress/server/package-WIN.json` to `angularExpress/server/package.json`

