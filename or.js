"use strict";

var slicer = Array.prototype.slice

module.exports = or

function or() {
  /**
  High order function takes variadic number of predicates & returns composed
  predicate joined by boolean `&&` operator.

  ## Example

  [ 1, 2, 3, 4, 5, 6 ].filter(or(less(4), greater(3)))

  // => [ 1, 2, 5, 6 ]
  **/
  var predicates = slicer.call(arguments)

  return function value(input) {
    var index = 0
    var count = predicates.length
    var result = false
    while (result === false && index < count) {
      var predicate = predicates[index]
      index = index + 1
      result = predicate(input)
    }
    return result
  }
}
