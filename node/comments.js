var _u = require('underscore');

var Comment = function(obj){
    //a horrible way to make id's but it will have to do for
    //the demo
    this.id = comments.length;

    var properties = _u.defaults(obj,{
        name : "No Name",
        comment : "No Comment",
        date : new Date().getTime(),
        avatar : "bmo"
    });

    _u.extend(this, properties);
};

//the array -- err -- "database" 
var comments = [];
//add a new empty comment for debugging
comments.push(new Comment({}));

exports.list = function(req, res, next){
    res.status = 200;
    res.end(JSON.stringify(comments));
};

exports.add = function(req, res, next){
    var name = req.body.name,
        comment = req.body.comment,
        avatar = req.body.avatar;

    comments.push(new Comment({
        name : name,
        comment : comment,
        avatar : avatar
    }));
    res.status = 200;
    res.end();
};

exports.delete = function(req, res, next){

};

