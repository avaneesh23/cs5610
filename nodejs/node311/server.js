var express = require('express')
var app = express()

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With"
	next();
});

app.get('/foo', function (req, res) {
//  res.send('Hello World')
	res.json('Hello World')
})



var app1= {name: "Facebook" };
var app2= {name: "Twitter" };
var app3= {name: "Google Maps" };
var app4= {name: "Watsapp" };

var alice = { first: "Alice", last: "Wonderland"};
var bob   = { first: "Bob", last: "Marley" };
var employees = [alice,bob];

alice.projects = app1

app.get('employees', function(req, res) {
	res.json(empolyees);
});

app.get('/employees/:index', function (req, res) {
	var index = req.params.index;
	res.json(employees[index]);
});

app.get('/employees/:index/projects', function (req, res) {
	var index = req.params.index;
	res.json(employees[index]);
});

app.get('/employees/:index/projects/:projectIndex', function (req, res) {
	var index = req.params.index;
	var projectIndex = req.params.projectIndex;
	res.json(employees[index]);
});

var server = app.listen(3000, function() { 
	console.log('Listening to port %d', server.address().port);
});

// app.listen(3000)