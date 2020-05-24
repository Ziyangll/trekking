'use strict';

const express = require('express');
const packerFnc = require('../../services/Application/packer');

let router = express.Router();

router.post('/', packerFnc.packerList );

module.exports = router;