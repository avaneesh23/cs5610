var http = require('http'),
io = require('socket.io'),
  connect = require('connect'),
  chatter = require('chatter');

var app = connect().use(connect.static('public')).listen(3000).Server(http);
var chat_room = io.listen(app);

chatter.set_sockets(chat_room.sockets);

chat_room.sockets.on('connection', function (socket) {
  chatter.connect_chatter({
    socket: socket,
    username: socket.id
  });
});



var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to my Instanthat application\n');
};

var server = http.createServer(handleRequest);

server.listen(3000, '192.168.1.121');
