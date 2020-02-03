var http = require('http');
const express = require('express')
const app = express()
var fs = require('fs');
var path = require('path');


var server = http.createServer(function(request, response) {
    //response.setHeader('Connection', 'Transfer-Encoding');
    //response.setHeader('Content-Type', 'text/html; charset=utf-8');
    //response.setHeader('Content-Disposition', 'attachment; filename="sample23kb.txt"');
    //response.setHeader('Transfer-Encoding', 'chunked');
    //response.useChunkedEncodingByDefault = true;
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.writeHead(200);
    response.writeHead(200, {"Content-Type": "text/plain"});

        var pid = process.pid;
        //const argv = require('yargs').argv
        const {DefaultAzureCredential} = require('@azure/identity');
        const {SecretClient} = require('@azure/keyvault-secrets');

        const credential = new DefaultAzureCredential();
        credential.getToken = async () => {
        const res = await axios({
          method: 'get',
          url: `http://169.254.169.254/metadata/identity/oauth2/token`,
          headers: {
            Metadata: true,
          },
          params: {
            'api-version': '2018-02-01',
            resource: 'https://mbkey.vault.azure.net/',
          },
        });
        return {
          token: res.data.access_token,
          expiresOnTimestamp: res.data.expires_on,
        };
        };

        //var output = "nodejs version = "+ process.version + ", Process Id = " + pid + ", mongourl = "+ argv.mongourl;
        //var output = JSON.stringify(request.headers)+ "nodejs version = "+ process.version + ", Process Id = " + pid;
        var output = "nodejs version = "+ process.version + ", Process Id = " + pid;

        //fs.createReadStream(path.resolve(__dirname, 'sample23kb.txt')).pipe(response);
        response.write(output);
        //response.end("---dev2---------");
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
