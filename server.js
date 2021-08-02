const io = require('socket.io')(8023);
const exec = require('child_process').exec;

/*
 * ƒT[ƒo‚ÌÚ‘±
 */
io.on('connection', function ( socket ) {

  socket.on('count-up', function ( data ) {
    let count = data + 1
    console.log('server : ' + count);
    if (count < 5) {
      io.sockets.emit('response', count);
    } else {
      io.sockets.emit('exit', count);
    }
  });
});
console.log('Start socket server : http://127.0.0.1:8023');