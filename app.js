/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
//  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/',express.static(__dirname + '/public/global'));

app.get('/app',express.static(__dirname + '/public/app'));
app.get('/test',express.static(__dirname + '/public/test'));
app.get('/test/unit',express.static(__dirname + '/public/test/unit'));

app.get('/*',express.static(__dirname + '/public'));
app.get('/Documentation', routes.list);
app.get('/Documentation/:doc', routes.document);

//The 404 Route (ALWAYS Keep this as the last route)
//see
//http://stackoverflow.com/questions/7843961/how-do-express-static-directories-work-with-a-404-route
app.get('*', function(req, res){
  res.send("It's a 404 yo!", 404);
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
