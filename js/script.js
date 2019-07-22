// require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let burger = require('./parts/burger.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js');


    burger();
    modal();
    slider();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
