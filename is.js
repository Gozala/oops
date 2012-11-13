"use strict";

var curry = require("functional/curry")

var is = curry(function assert(expected, actual) {
  /**
  Functions takes `expected` and `actual` values and returns `true` if
  `expected === actual`. Returns curried function if called with less then
  two arguments.

  ## Example

      [ 1, 0, 1, 0, 1 ].map(is(1))

      // => [ true, false, true, false, true ]

  **/
  return actual === expected
})

module.exports = is
