'use strict';


const helpers = {};
helpers.randomNumberBetween = function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

helpers.userName = '301d20 warriors'


module.exports = helpers;