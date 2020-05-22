'use strict';

const apiRoute = require('./apis');
const path = require('path');

function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' +req.originalUrl);
        return next();
    });
    server.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    server.use('/api', apiRoute);
};

module.exports = {
    init:init
};