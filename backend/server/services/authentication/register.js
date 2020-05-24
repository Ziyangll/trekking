'use strict';

const express = require('express');
const model = require('../../models/User')

const httpMessages = {
    onValidationError: {
        success: false,
        message: 'Please enter email and password.'
    },
    onUserSaveError: {
        success: false,
        message: 'That email address already exists.'
    },
    onUserSaveSuccess: {
        success: true,
        message: 'successfully create new user.'
    }
}

// register new user
function registerUser(request, response) {
    let { email, password } = request.body;
    if (!email || !password) {
        response.json(httpMessages.onValidationError);
    }
    else {
        let newUser = new model.User({
            email: email,
            password: password
        });
        newUser.save(error => {
            if (error) {
                return response.json(httpMessages.onUserSaveError);
            }
            response.json(httpMessages.onUserSaveSuccess);
        });
    }
}

module.exports = { registerUser:registerUser };