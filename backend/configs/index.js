'use strict';

const _ = require('lodash');
//process.env.NODE_ENV
const env = 'local';
const envConfig = require('./' + env);

let defaultConfig = {
    env:env
};

module.exports= _.merge(defaultConfig, envConfig);