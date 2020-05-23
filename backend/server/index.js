//server file

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = function (config, db) {
        let routes = require('./routes');

        //server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        //return middleware that parses json
        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(cookieParser());
        server.use(logger('dev'));
        server.use(passport.initialize());
        //render the front end
        server.use(express.static(path.join(__dirname, 'build')));
        //require('./configs/passport')(passport);
        mongoose.connect(db.database, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, console.log(db.database));

        //set up routes
        routes.init(server);
    };

    start = function () {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listeing on -http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};
