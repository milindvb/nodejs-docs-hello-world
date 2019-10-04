var http = require('http');
const express = require('express')
const app = express()
//const appInsights = require("applicationinsights");
//appInsights.setup("58f83d07-2042-4eef-9fca-461863c9ebe3");
//appInsights.start();
var output = "";
var body="xyz";
var options = {
  host: "http://jsonplaceholder.typicode.com/todos/1",
  method: "GET"
};

var server = http.createServer(function(request, response) {
    app.use(express.static('public'))

    response.writeHead(200, {"Content-Type": "text/plain"});
    const version = process.version;
    var pid = process.pid;
    //const argv = require('yargs').argv
    var request = require('request');

    var output = "nodejs version = "+ process.version + ", Process Id = " + pid;
    //var output = "nodejs version = "+ process.version + ", Process Id = " + pid +" ---- " + request.headers['x-ms-client-principal-name'];
    //process.env['USERNAME_AAD'] = request.headers['x-ms-client-principal-name'];
    var rq = http.request(options, function(rs) {
        rs.on('data', function (chunk) {
            output = output + chunk;
            //response.write(chunk);
        });
        rs.on('end', function () {
            response.end();
        });
    });    
    request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
       console.log('error:', error); // Print the error if one occurred
       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
       console.log('body:', body); // Print the HTML for the Google homepage.
    });
    //output = output + " ==== " + body;
    response.write(output);
    response.end("- - - - -");
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
