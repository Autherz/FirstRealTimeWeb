const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")
const socketIO = require("socket.io")

const server = express();
const port = 9000 ;

server.use(bodyParser.json)
server.use(bodyParser.urlencoded({
    extended:true
}))

const app = server.listen(port, function(err, result){
    console.log('running in port http://localhost:' + port)
})

const io = socketIO.listen(app);

// รอการ connect จาก client
io.on('connection', client => {
    console.log('user connected')

    // เมื่อ client disconnect
       client.on('disconnect', ()=>{
        console.log('user disconnected')
    })

    // ส่งข้อมูลไปยัง client 
    client.on('sent-message', function(message){
        console.log('sent success')
        io.sockets.emit('new-message', message)
    })
})

module.exports = server