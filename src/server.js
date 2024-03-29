const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const https = require('https');
var cors = require('cors');
const fs = require('fs')
const app = express();
const resolve = require('path').resolve

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
    var picFile = "../vans.png"
    var body = fs.readFileSync(picFile);
    var picStr = body.toString('base64');
    var dataFile = "../data"
    var bodyArr = fs.readFileSync(dataFile, 'utf-8').split(/\r?\n/)
    return res.send({led: bodyArr[1], distance: bodyArr[0], pic: picStr})
})





server.listen(process.env.PORT || 8080);