'use strict';

const express = require('express');
const loginService = require('../../services/authentication/login');
const passport = require('passport');

let router = express.Router();

router.get('/', (req,res) => {
  res.send('hello')
});

router.post('/', loginService.loginUser);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    console.log('redirected', req.user)
    let user = {
      displayName: req.user.displayName,
      name: req.user.name.givenName,
      email: req.user._json.email,
      provider: req.user.provider
    }
    console.log(user)
    // Successful authentication, redirect home.
    res.redirect('http://trekkingnew.space/map');
  });

module.exports = router;