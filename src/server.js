const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const https = require('https');
var cors = require('cors');
const fs = require('fs')
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


io.on('connection', function(socket){
    console.log("connect socket")
})

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get("/", function(req, res, next) {
    return res.send('pong');
});

app.get("/api/dashboard", function(req,res) {
    fs.readFile(path.resolve(__dirname, "../TLEs/categories.json"), 'UTF-8', function (err, data){
        return res.send({categories: data})
    })
})





server.listen(process.env.PORT || 8080);