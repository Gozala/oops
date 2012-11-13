"use strict";

var and = require("../and")
var less = require("../less")
var greater = require("../greater")
var unequal = require("../unequal")

exports["test and"] = function(assert) {
  assert.ok(and(greater(7))(3), "7 > 3")
  assert.deepEqual([ 1, 2, 3, 4, 5, 6 ].filter(and(less(2), greater(5))),
                   [3, 4],
                   "picks parts that satisfy both predicates")
}

exports["test n predicates"] = function(assert) {
  assert.deepEqual([ 1, 2, 3, 4, 5, 6 ].filter(and(less(1),
                                                   greater(5),
                                                   unequal(3))),
                   [2, 4],
                   "picks parts that satisfy all predicates")
}

if (require.main === module)
  require("test").run(exports)
