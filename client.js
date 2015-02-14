'use strict'

var request = require('request');

var Client = function(settings) {
    this.account = function(usernameOrEmail, onDone){
        // Makes REST api call, returns new Account object
        throw new Error('Not Implemented');
    }
    this.accounts = function(){
        throw new Error('Not Implemented');      
    }
    this.authenticatedAccount = function(){
        // HTTP request to api/me, returns a new account object
        throw new Error('Not Implemented');
        
    }
}