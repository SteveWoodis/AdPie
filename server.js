var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customer', ['customer']);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/customer', function(req, res){
	console.log('I received a GET request');

	db.customer.find(function(err, docs){
		console.log(docs);
		//res.json(docs);
		res.send(JSON.stringify(docs[0]));
	})
});
app.get('/',function(req, res){
	res.send('Hello World from Serber.JS')
})


app.listen(3000);
console.log("Server running on Port 3000");