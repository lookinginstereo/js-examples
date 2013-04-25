
/**
 * Module dependencies.
 */

var express = require('express'),
    comments = require('./comments'),
    http = require('http'),
    cors = require('./cors');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(cors.crossDomainWhiteList());
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/comments', comments.list);
app.get('/comments/:id', comments.getById);
app.post('/comments', comments.add);
app.delete('/comments/:id', comments.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
