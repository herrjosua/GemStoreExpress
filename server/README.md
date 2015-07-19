## Server Notes

To run &mdash; pick the appropriate Operation System option 

### Windows Option

* Rename `GemStoreExpress/server/package.json` to `GemStoreExpress/server/package-MAC.json`

* Rename `GemStoreExpress/server/package-WIN.json` to `GemStoreExpress/server/package.json`

* OR

* Modify `GemStoreExpress/server/package.json`

    * Change line 6 from "start": "NODE_ENV=production nodemon ./bin/www", to "start": "production.sh",

	* Change line 7 from  "test": "NODE_ENV=development nodemon ./bin/www" to "test": "test.sh"

### OSX

* Rename `GemStoreExpress/server/package.json` to `GemStoreExpress/server/package-MAC.json`

* Rename `GemStoreExpress/server/package-WIN.json` to `GemStoreExpress/server/package.json`


