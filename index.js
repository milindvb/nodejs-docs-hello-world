<<<<<<< HEAD
var http = require('http');
const express = require('express')
const app = express()


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
        const version = process.version
        response.write("nodejs version --::: ");
        response.write(version);
        response.write(process.env.MB_API_URL);
        response.end("");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
=======
var http = require('http');
const express = require('express')
const app = express()


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
        const version = process.version
        response.write("nodejs version: ");
        response.write(version);
        response.write(process.env.MB_API_URL);
        response.end("");
        

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
>>>>>>> b074ea0d7820a49dd1d3d5c27b2c8c2740a17791
