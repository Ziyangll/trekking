'use strict';

const registerController = require('../../controllers/apis/register');
//const loginController = require('../../controllers/apis/login');
const express = require('express');

let router = express.Router();
router.use('/Register', registerController);
//router.use('/Login', loginController);

module.exports = router;