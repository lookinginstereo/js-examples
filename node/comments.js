var _u = require('underscore');

var Comment = function(obj){
    //a horrible way to make id's but it will have to do for
    //the demo
    this.id = comments.length;

    var properties = _u.defaults(obj,{
        name : "No Name",
        comment : "No Comment",
        date : new Date().getTime(),
        avatar : "BMO"
    });

    _u.extend(this, properties);
};

//the array -- err -- "database" 
var comments = [];

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

exports.getById = function(req, res, next){
    var comment = _u.findWhere(comments,{id : parseInt(req.params.id)});
    console.log("comment is: " + typeof comment);
    if(typeof comment !== "undefined"){
        res.status = 200;
        res.end(JSON.stringify(comment));
    }else{
        res.send(404, "No Comment Found with given id");
    }
};

exports.delete = function(req, res, next){

};

