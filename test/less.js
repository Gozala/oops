"use strict";

var less = require("../less")

exports["test with both arguments"] = function(assert) {
  assert.ok(less(1, 2), "1 is less than 2")
  assert.ok(!less(2, 1), "2 is not less than 1")
  assert.ok(!less(1, 1), "1 is not less than 1")
}

exports["test currying"] = function(assert) {
  var actual = [ 1, 2, 3, 4, 5 ].filter(less(3))

  assert.deepEqual(actual, [ 4, 5 ], "picked less than 2")
}

if (require.main === module)
  require("test").run(exports)
