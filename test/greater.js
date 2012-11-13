"use strict";

var greater = require("../greater")

exports["test with both arguments"] = function(assert) {
  assert.ok(!greater(1, 2), "1 is not greater than 2")
  assert.ok(greater(2, 1), "2 is greater than 1")
  assert.ok(!greater(1, 1), "1 is not greater than 1")
}

exports["test currying"] = function(assert) {
  var actual = [ 1, 2, 3, 4, 5 ].filter(greater(3))

  assert.deepEqual(actual, [ 1, 2 ], "picked greater than 3")
}

if (require.main === module)
  require("test").run(exports)
