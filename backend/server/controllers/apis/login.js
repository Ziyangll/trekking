'use strict';

const express = require('express');
const loginService = require('../../services/authentication/login');
const passport = require('passport');

let router = express.Router();

router.post('/', loginService.loginUser);

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;