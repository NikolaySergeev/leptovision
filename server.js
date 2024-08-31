'use strict';

//const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
//const app = express();
//app.get('/', (req, res) => {
//  res.send('Hello world\n For Nikolay ) again');
//});

//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Module dependencies
 */

var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    serveStatic = require('serve-static'),
    errorhandler = require('errorhandler'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    path = require('path');

//custom modules
var routes = require('./routes');

var app = module.exports = express();
var restApi = require('./routes/restapi')(app);
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//*****Store user data in variable room
var rooms = [];

//*****For creating Post requests 
//var unirest = require('unirest');

/**
 * Configuration
 */

 //*****Enable CORS 
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//default
//Template Engine, handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: "views/"
}));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');
//port
app.set('port', process.env.PORT || PORT);
//logger
app.use(morgan('combined'));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
//Lets us use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride());
app.use(serveStatic(path.join(__dirname, 'public')));

//development
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// production
if (app.get('env') === 'production') {
  // TODO
};

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', restApi.getObjects);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

//******Get Room id from url
/*
app.get('fabric/:roomName', function(req, res){
  activeChat = req.params.roomName;
  //res.sendFile(__dirname +'/public/chat.html');
});
app.get('fabric/:roomName/', function(req, res){
  activeChat = req.params.roomName;
  //res.sendFile(__dirname +'/public/chat.html');
});
*/

// Socket.io Communication
var socket = require('./routes/socket')(io);

/**
 * Start Server
 */

server.listen(app.get('port'), HOST, function () {
  console.log('Express server listening on port ' + app.get('port'));
});
