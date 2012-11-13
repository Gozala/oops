"use strict";

var curry = require("functional/curry")

var isnt = curry(function isnt(expected, actual) {
  /**
  Functions takes `expected` and `actual` values and returns `true` if
  `expected !== actual`. Returns curried function if called with less then
  two arguments.

  ## Example

      [ 1, 2, 3, 4, 5 ].filter(isnt(3))

      // => [ 1, 2, 4, 5 ]
  **/
  return actual !== expected
})

module.exports = isnt
