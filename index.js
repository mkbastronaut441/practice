const app= require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);




app.set('view engine',"ejs");


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });



io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });


app.listen('3000',()=>{
    console.log(`server is listening at http://localhost:3000`);
});