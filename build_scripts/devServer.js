import express from 'express';
import path from 'path';
var fs = require('fs');
var morgan = require('morgan');
const spdy = require('spdy');
import api from '../api/';

/* eslint-disable  no-console */

const port = 3010;
const app = express();

// const options = {
//     key: fs.readFileSync(__dirname + '/cert/server.key'),
//     cert:  fs.readFileSync(__dirname + '/cert/server.crt')
// };

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.config');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.use('/api', api);
app.use(webpackMiddleware(webpack(webpackConfig), {
        publicPath: "/",
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
}));

app.get('*', function response(req, res) {
    res.write(webpackMiddleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
});


app.listen(port, err => err ? console.log(err) : console.log('express started'));
