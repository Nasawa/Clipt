var clip = require('copy-paste').global();

var socket = require('socket.io-client')(process.argv[2]);
var id = undefined;
if(process.argv[3])
	id = process.argv[3];
	

socket.on('connect', function () { console.log("socket connected"); });
socket.on('id', function(i) 
{
	if(!id) 
		id = i;

	console.log("My id is: " + id);
	socket.on(id + "", function(msg)
	{
		console.log("Adding " + msg + " to the clipboard");
		clip.copy(msg);
	});
})