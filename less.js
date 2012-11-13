"use strict";

var curry = require("functional/curry")

var less = curry(function assert(left, right) {
  /**
  Functions takes `left` and `right` arguments and returns `true` if
  `left < right`. Returns curried function if called with less then
  two arguments.

  ## Example

      less(1, 2)

      // => true

      [ 1, 2, 3, 4, 5 ].filter(less(3))

      // => [ 4, 5 ]

  **/
  return left < right
})

module.exports = less
