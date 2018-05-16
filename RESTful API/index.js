/*
*TITLE : Learning Node.js
*Primary file
*@Author: Shaswat Lenka
*@DATE : 14th May 2018
*/

// Dependencies:

// Starting the server
const http = require('http'); 
const url = require('url');

//the server should respond to all the request with a string
var server = http.createServer(function(req,res){

/* get the url and parse it (done by the url lib)
the true parameter calls the "query string" module where both the url and the query string module 
work together to return the url the user is viewing including parsing the query string data which
will be used by us later on*/

var parsedUrl = url.parse(req.url, true);

// get the path (using url lib)
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g, '');

/*Get the Query String as an object*/
var queryString = parsedUrl.query;

/*Get the HTTP Method : luckily the HTTP Method is available as one of the properties of the req
object. Remember that the req object is new for every incoming request*/
var method = req.method.toLowerCase();

/*Get Headers*/
var headers = req.headers;

/*Get the payloads*/
var 

// send the response 
res.end("Hello World!");

//log the request path 
console.log(headers);

})




//start the server and have it listen on port 3000
server.listen(3000, function(){
	console.log("the server is listening on port 3000");
})