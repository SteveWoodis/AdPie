var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customers', ['customers']);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/customers/:email', function(req, res){

	console.log('THis is the email', req.params.email);
	console.log('I received a GET request');
	db.customers.findOne({email:req.params.email},function(err, docs){
		console.log(docs);

		//res.json(docs);
		res.send(JSON.stringify(docs));
	})
});

app.post('/customers', function(req, res){
	console.log(req.body);
	db.customers.insert(req.body, function(err,doc){
		res.json(doc);
	})
});


app.listen(3000);
console.log("Server running on Port 3000");
//app.get('/customers', function(req, res){
// 	console.log('I received a GET request');

// 	db.customers.find(function(err, docs){
// 		console.log(docs);
// 		//res.json(docs);
// 		res.send(JSON.stringify(docs[0]));
// 	})
// });