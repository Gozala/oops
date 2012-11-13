"use strict";

var curry = require("functional/curry")

var greater = curry(function assert(left, right) {
  /**
  Functions takes `left` and `right` as arguments and returns `true` if
  `left > right`. Returns curried function if called with less then
  two arguments.

  ## Example

      greater(3, 2)

      // =>

      [ 1, 2, 3, 4, 5 ].filter(greater(3))

      // => [ 1, 2 ]

  **/
  return left > right
})

module.exports = greater
