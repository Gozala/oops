"use strict";

var curry = require("functional/curry")

var query = curry(function query(path, target) {
  var names = path.split(".")
  var count = names.length
  var index = 0
  var result = target
  while (result && index < count) {
    result = result[names[index]]
    index = index + 1
  }
  return result
})

module.exports = query
