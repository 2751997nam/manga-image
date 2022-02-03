var express = require('express');
var app = express();
const cors = require('cors');
const route = require('./route');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(route);
app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
});

var server = app.listen(5555, function () {
    var host = server.address().address
    var port = server.address().port
    // if (host == '::') {
    //     host = '127.0.0.1';
    // }
    console.log("manga image service : http://%s:%s", host, port)
})