'use strict';

const registerController = require('../../controllers/apis/register');
const loginController = require('../../controllers/apis/login');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);
router.use('/login', loginController);

module.exports = router;