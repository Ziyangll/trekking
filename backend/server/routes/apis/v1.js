'use strict';

const registerController = require('../../controllers/apis/register');
const loginController = require('../../controllers/apis/login');
const packerController = require('../../controllers/apis/packer');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);
router.use('/login', loginController);
router.use('/packer', packerController);

module.exports = router;