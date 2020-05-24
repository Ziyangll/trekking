'use strict';

const mongoose = require('mongoose');

const packerSchema = new mongoose.Schema ({
    weight: {
        type: Number,
//        required:true
    },
    backpacking: {
        type: Boolean,
        default: true
    },
    BPday: {
        type: Number,
        default: 1
    }
});

const packer = mongoose.model('packer', packerSchema)

module.exports = {
    packer:packer
}
