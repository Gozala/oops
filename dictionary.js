"use strict";

var curry = require("functional/curry")

var dictinory = curry(function dictinory(key, value) {
  /**
  High order function that takes `id` and returns function, which when invoked
  will return a hash with given `value` mapped to a curried `id`.
  **/
  var result = {}
  var count = arguments.length
  var index = 0
  while (index < count) result[arguments[index++]] = arguments[index++]
  return result
})
module.exports = dictinory
