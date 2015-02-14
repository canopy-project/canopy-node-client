var util = require('./canopy-util');

var params = {
    host: 'sandbox.canopy.link',
    port: 443,
    https: true,
    path: '/api/info',
    method: 'GET',
    skipSSLCheck: true,
    onDone: function(err, res){
        if(!err){
            console.dir(res);
        } else {
            throw new Error(err);            
        }
    }
}
util.req(params);