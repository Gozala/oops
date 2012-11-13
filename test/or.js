"use strict";

var or = require("../or")
var less = require("../less")
var greater = require("../greater")
var equal = require("../equal")

exports["test or"] = function(assert) {
  assert.ok(or(greater(7))(3), "7 > 3")
  assert.ok(!or(greater(7))(8), "7 < 8")
  assert.deepEqual([1, 2, 3, 4, 5, 6].filter(or(less(4), greater(3))),
                   [1, 2, 5, 6],
                   "picks items that satisfy either predicates")
}

exports["test n predicates"] = function(assert) {
  assert.deepEqual([ 1, 2, 3, 4, 5, 6 ].filter(or(less(4),
                                                  greater(3),
                                                  equal(4))),
                   [1, 2, 4, 5, 6],
                   "picks items that satisfy either predicates")
}

if (require.main === module)
  require("test").run(exports)
