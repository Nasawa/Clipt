var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use("/styles", express.static(__dirname + '/styles'));
app.use("/styles/css", express.static(__dirname + '/styles/css'));
app.use("/styles/js", express.static(__dirname + '/styles/js'));
app.use("/styles/fonts", express.static(__dirname + '/styles/fonts'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
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