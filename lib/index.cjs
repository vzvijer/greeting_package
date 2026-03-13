'use strict';

function morningGreet(name) {
    return `Good morning ${name}`;
}

function eveningGreet(name) {
    return `Good evening ${name}`;
}

exports.eveningGreet = eveningGreet;
exports.morningGreet = morningGreet;
