import express from 'express';
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
const app = express();
const config = require('./config');
Grid.mongo = mongoose.mongo;
mongoose.connect(config.uri);
var conn = mongoose.connection;
var gfs;

conn.once('open', function () {
    gfs = Grid(conn.db);
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.get('/:id', function (request, response) {
    var readstream = gfs.createReadStream({
        _id: request.params.id, root: 'uploadfs'
    });
    readstream.on('error', function (err) {
        response.status(404);
        response.send('Image not found');
    });
    readstream.pipe(response);
});

module.exports = app;
