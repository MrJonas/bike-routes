import express from 'express';
import path from 'path';

import api from '../api/';
const spdy = require('spdy');
var compression = require('compression')

var fs = require('mz/fs');
// var http = require('http');
// var https = require('https');

/* eslint-disable  no-console */


// const options = {
//     key: fs.readFileSync(__dirname + '/cert/server.key'),
//     cert: fs.readFileSync(__dirname + '/cert/server.crt')
// }

const port = 3010;


const app = express();
app.use(compression())
app.use('/api', api);

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, err => err ? console.log(err) : console.log('express started'));

// spdy.createServer(options, app).listen(port, (error) => {
//     if (error) {
//         console.error(error)
//         return process.exit(1)
//     } else {
//         console.log('Listening on port: ' + port + '.')
//     }
// })
