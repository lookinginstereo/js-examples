var _u = require('underscore');

function hostMatchesList(host, list){
    var hostMatch = false;
    _u.each(list, function(item){
        if(host.match(item)){
            hostMatch = true;
        }
    });
    return hostMatch;
}

function getHostName(fullHostUrl){
    return fullHostUrl.split(":")[0];
}

exports.crossDomainWhiteList = function(urlList){
    var list = urlList || ['.*'];
    return function(req, res, next){
        var host = getHostName(req.headers.host);
        var hostMatch = hostMatchesList(host, list);
        if(hostMatch){
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
              
            // intercept OPTIONS method
            if ('OPTIONS' == req.method) {
              res.send(200);
            }
            else {
              next();
            }
        }else{
            //to adhere to 405 response requreiments rfc2616
            res.header('Allow', 'GET');
            res.end(405);
        }
    }
};
