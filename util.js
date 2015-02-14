'use strict'
var http = require('http');
var https = require('https');
var fs = require('fs');

var req = function(params){
/*
    params (all json w/auth): host, port, https(boolean) path, un, pw, 
                                method, payload, onDone
*/
    
    var headers = {}
    if(params.un){
        headers.Authorization = 'Basic ' + new Buffer(params.un + ':' + params.pw).toString("base64");     
    }
    if(params.payload){
        var payloadString = JSON.stringify(params.payload);
        headers["Content-Type"] = 'application/json';
        headers["Content-Length"] = payloadString.length;       
    }
    var options = {
        host: params.host,
        port: params.port,
        path: params.path,
        method: params.method,
        headers: params.headed
    }
    var request = params.https ? https.request : http.request;
    var req = request(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';
        res.on('data', function(data) {
            responseString += data;
            console.log('responseString: ' + responseString);
        });
        res.on('end', function() {
            var resultObject = JSON.parse(responseString);
            params.onDone(null, resultObject);
        });
    });
    req.on('error', function(e) {
        params.onDone(e, null);
    });

    if(params.payload){
        req.write(payloadString);
    }
    req.end();
}

module.exports.req = req;