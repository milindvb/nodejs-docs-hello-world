var http = require('http');
const express = require('express')
const app = express()
//const appInsights = require("applicationinsights");
//appInsights.setup("58f83d07-2042-4eef-9fca-461863c9ebe3");
//appInsights.start();
var output = "";

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
 
    request('https://mbcsharpfunc1.azurewebsites.net/api/HttpTrigger1?code=P84a6CUaIFJmLYlezkgxeh4j4/v1acAlclRdA6jCBXw1odw5LlzASg==&name=Azure', function (error, resp, body) {
       console.log('error:', error); // Print the error if one occurred
       console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
       console.log('body:', body); // Print the output
    });
    //output = output + " ==== " + body;
    response.write(output);
    response.end("- - - - -");
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
