"use strict";

var slicer = Array.prototype.slice

module.exports = and

function and() {
  /**
  High order function takes variadic number of predicates & returns composed
  predicate joined by boolean `&&` operator.

  ## Example

  [ 1, 2, 3, 4, 5, 6 ].filter(and(less(2), greater(5)))

  // => [ 3, 4 ]
  **/
  var predicates = slicer.call(arguments)

  return function assert(input) {
    var result = true
    var index = 0
    var count = predicates.length
    while (result && index < count) {
      var predicate = predicates[index]
      index = index + 1
      result = predicate(input)
    }
    return result
  }
}
