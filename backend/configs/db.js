'use strict';

const dotenv = require('dotenv').config();
const psw = process.env.PSW
const usr = process.env.USR

module.exports = {
    'secret': 'putsomethingsecrethere',
    'database': `mongodb+srv://${usr}:${psw}@hikingapp-nl4jx.mongodb.net/test?retryWrites=true&w=majority`
};