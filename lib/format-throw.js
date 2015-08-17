'use strict';

var format = require('sprintf-js').sprintf;
var slice = Array.prototype.slice;

var thr = module.exports = function () {
  throw thr.make.apply(null, arguments);
};

thr.make = function (ErrorClass, msg) {
  var offset = 1;

  if (typeof ErrorClass !== 'function') {
    offset = 0;
    ErrorClass = Error;
  }

  return new ErrorClass(format.apply(null, slice.call(arguments, offset)));
};
