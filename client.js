const io = require('socket.io-client');

var count = 0;
var socket = io.connect('http://localhost:8023');//接続先のサーバを指定

socket.on('connect' ,function (data) {
  socket.emit('count-up',count++);

  socket.on('response',function(data){
    count = data;
    count++;
    console.log('client: ' + count);
    socket.emit('count-up', count);
  });

  socket.on('log',function(data){
    console.log('client-log: ' + data);
  });
  
  socket.on('exit',function(data){
    console.log('client-exit: ' + data);
    socket.disconnect();
  });

});