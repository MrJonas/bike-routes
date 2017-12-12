import express from 'express';
var  bikeRoutesAPI = require('./BikeRoutesAPI');
var imageApi = require('./ImagesAPI');

const api = express();

var bodyParser = require('body-parser')
api.use( bodyParser.json() );       // to support JSON-encoded bodies
api.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

api.use('/route/', bikeRoutesAPI);
api.use('/images/', imageApi);

export default api;

