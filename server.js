var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/text-send.html');
});

io.on('connection', function(socket){
	console.log("Connection: " + socket.id);
	socket.emit('id', socket.id);
  socket.on('message', function(id, msg){
    console.log('clip: ' + msg + " to: " + id);
	io.emit(id + "", msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});