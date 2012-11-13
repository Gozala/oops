"use strict";

var curry = require("functional/curry")

var slicer = Array.prototype.slice

var associate = curry(function(dictionary, key, value) {
  dictionary[key] = value
  if (arguments.length > 3)  {
    var count = arguments.length
    var index = 3
    while (index < count) dictionary[arguments[index++]] = arguments[index++]
  }
  return dictionary
})

module.exports = associate
