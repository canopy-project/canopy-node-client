var http = require('http');
var extend = require('extend');
var typeCheck = require('type-check').typeCheck;
 

var Client = function(settings) {
};

var initClient = function(settings) {
    // set defaults
    var defaultSettings = {
        "auth-username": null,
        "auth-password": null,
        "auth-device-id": null,
        "auth-device-secret": null,
        "auth-type": "basic",
        "server" : "sandbox.canopy.link",
        "http-port": 8080,
        "https-port": 443,
        "use-https": true 
    }

    var mySettings = {};
    extend(false, mySettings, defaultSettings, settings);
    console.log(mySettings);

    // validate settings
    validateSettings(mySettings);
    return new Client(mySettings);
}

var validateSettings = function(settings) {
    if (settings["auth-username"] && settings["auth-device-id"]) {
        throw new Error('Please choose either auth-username or auth-device-id, not both, thanks.');
    }
    if (settings["auth-username"]) {
        if (!typeCheck('String', settings["auth-username"])) {
            throw new Error('Expected string for auth-username');
        }
        if (!typeCheck('String', settings["auth-password"])) {
            throw new Error('Expected string for auth-password');
        }
    } else if (settings["auth-device-id"]) {    
        if (!typeCheck('String', settings["auth-device-id"])) {
            throw new Error('Expected string for auth-device-id');
        }
        if (!typeCheck('String', settings["auth-device-secret"])) {
            throw new Error('Expected string for auth-device-secret');
        }    
    } else {
        throw new Error('Must provide either auth-username or auth-device-id');
    }
    if (settings["auth-type"] !== "basic") {
        throw new Error('Expected string "basic" for auth-type');
    }
    if (!typeCheck('String', settings["server"])) {
        throw new Error('Expected string for server');
    }
    if (!typeCheck('Number', settings["http-port"])) {
        throw new Error('Expected number for http-port');
    }
    if (!typeCheck('Number', settings["https-port"])) {
        throw new Error('Expected number for https-port');
    }
}


var User = function() {
}



// expose initClient
module.exports.initClient = initClient;

// expose auth-username
module.exports.Client = new User();

// module.exports.initDeviceClient = initDeviceClient;
// module.exports.initUserClient = initUserClient;


