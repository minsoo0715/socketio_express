var app = require('express')();
import {Request, Response} from 'express';
import { Socket } from 'socket.io';
var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/', (req:Request, res:Response) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(3000, () => {
    console.log('Socket io server listening on port 3000');
})

io.on('connection', function(socket:Socket) {
    console.log('access','socket_id :', socket.id);

    socket.on('test', function(data) {
        console.log('input data is ' + data)
        
        io.emit('input', data);
    })
    
    socket.emit('test', '발송 완료');
})

