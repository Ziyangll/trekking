'use strict';

const express = require('express');
const apiRoutes = express.Router;
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require('../../../configs/db');

const model = require('../../models/User');

//http response messages
const httpResponse = {
    onUserNotFound: {
        success: false,
        message: 'User not found.'
    },
    onAuthenticationFail: {
        success: false,
        message: 'Password did not match.'
    }
}