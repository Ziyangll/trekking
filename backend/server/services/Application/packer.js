'use strict';

const express = require('express');
const li = require('../../models/List');

function packerList(req, res) {
    let { weight, backpacking, BPday } = req.body;
    let newList = new li.packer({
        weight: weight,
        backpacking: backpacking,
        BPday: BPday
    });
    newList.save(error => {
        if (error) {
            return res.send(error)
        }
        if (BPday == 1) {
            let x = 0.10
            let dayPack = weight * x;
            res.json(dayPack);
        } else if (BPday != 1) {
            let y = 0.2;
            let multiPack = weight * y;
            res.json(multiPack)
        };
    });
}

module.exports = {
    packerList: packerList,
};
