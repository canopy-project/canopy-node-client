'use strict'

var util = require('canopy-util');
var Account = require('account');
var Client = function(settings) {
    this.account = function(usernameOrEmail, onDone){
        // Makes REST api call, returns new Account object
        throw new Error('Not Implemented');
    }
    this.accounts = function(){
        throw new Error('Not Implemented');      
    }
    this.authenticatedAccount = function(onDone){
        // HTTP request to api/me, returns a new account object
        util.req({
            host: settings.server,
            port: settings["use-https"] ? settings["https-port"] : settings["http-port"],
            path: 'api/me',
            method: 'GET',
            un: settings["auth-username"],
            pw: setting["auth-password"],
            onDone: function(err, res){
                if(!err){
                    // ToDo: validate response
                    var account = new Account(res);
                    onDone(null, account);
                } else {
                    onDone(err, null);
                }
            }
        });
    }
    this.device = function( id, onDone ){
        // Makes HTTP request, fetches device and creates new device object
        throw new Error('Not Implemented');
    }
}