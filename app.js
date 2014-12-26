
var express = require('express'),
app= express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
cluster = require('cluster'),
fs = require('fs'),
domain = require('domain').create(),
nicknames=[];

var logger = require('./logger');
require('./Fileupload_download')(app, domain, fs, logger);

var http = require('http');
var numCPUs = require('os').cpus().length;

/*http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(3000);

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
	  logger.log('worker ' + worker.process.pid + ' died');
  });
} else {
  
	

}*/
server.listen(3000, function() {
	logger.log("server started at 3000");
	});
app.get('/', function(req,res){
res.sendfile(__dirname + '/index.html');
});

app.post('/Fileupload', function(req,res){
	res.sendfile(__dirname + '/Fileupload.html');
	});

io.sockets.on('connection', function(socket){
	socket.on('new user', function(data, callback){
	if (nicknames.indexOf(data) != -1)
	{
		callback(false);
	}
	else
		{
		callback(true);
		socket.nickname = data;
		nicknames.push(socket.nickname);
		updateNicknames();
		}
	});
	
	function updateNicknames() {
		io.sockets.emit('usernames', nicknames);
	}
	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data, nick: socket.nickname});
	});
	
	socket.on('disconnect', function(data){
		if (!socket.nickname) return;
		nicknames.splice(nicknames.indexOf(socket.nickname), 1);
		updateNicknames();
	});
	
});
