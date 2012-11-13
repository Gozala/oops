"use strict";

var curry = require("functional/curry")

var equal = curry(function assert(expected, actual) {
  /**
  Functions takes `expected` and `actual` values and returns `true` if
  `expected == actual`. Returns curried function if called with less then
  two arguments.

  ## Example

      [ null, undefined, 0, 1 ].filter(equal(null))

      // => [ null, undefined ]

  **/
  return actual == expected
})

module.exports = equal
