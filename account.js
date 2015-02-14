'use strict'

module.exports = function(payload){

}


/*

{
    "activated": true,
    "email": "robert.talamantez2@gmail.com",
    "result": "ok",
    "username": "robert"
}

routines to implement

| CLASS Account                              |
----------------------------------------------
| PUBLIC METHODS                             |
|                                            |
| // device(id, function(Error, Device))     |
| // devices(filters)                        | -> DeviceQuery
| emailAddress()    return payload.emailAddress| -> string
| isActivated()     return payload.activated | -> bool
| // quotas()                                | -> object
| username() return payload.username         | -> string
| update(params, function(Error))  
            params: (emailAddress), 
            (oldpassword),(newpassword)      | -> string
----------------------------------------------

*/
