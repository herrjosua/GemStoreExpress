# Mongo Commands

## To insert via Shell
`db.products.insert({name: "Product 4", description: "Product 4 Description", shine: "100", price: "257.99", rarity: "150", color: "clear", faces:"32", images:"/images/gem-02.gif"})`

## To update via Shell
`db.products.update({name: "Product 3"},{$set: {images:"/images/gem-05.gif"},$currentDate: {lastModified: true}})`

## To clear a collection

`db.products.remove({})`

## To Delete

`db.products.remove({name: "Product 1"})`

## To import JSON via Shell -- NOT in mongo shell
`mongoimport -d gemStoreDb -c products --file /Users/Josua/Documents/Websites/GemStoreExpress/source/products.json --jsonArray`

## To import via Command Line -- NOT in mongo shell
`curl --data "name=Product 1&description=Product 1 Description&shine=10&price=29.95&rarity=200&color=blue&faces=3" http://localhost:3000/products`
