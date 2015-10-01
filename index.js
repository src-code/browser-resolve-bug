'use strict';

var resolve = require('browser-resolve');

resolve('asap/raw', {}, function (err, path) {
    console.log('asap/raw -> ', path);
});

resolve('asap/raw.js', {}, function (err, path) {
    console.log('asap/raw.js -> ', path);
});