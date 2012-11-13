"use strict";

var curry = require("functional/curry")

var unequal = curry(function assert(expected, actual) {
  /**
  Functions takes `expected` and `actual` values and returns `true` if
  `expected == actual`. Returns curried function if called with less then
  two arguments.

  ## Example

      [ 1, "1", "2", 0 ].filter(unequal(true))

      // => [ "2", 0 ]

  **/
  return actual != expected
})

module.exports = unequal
