"use strict";

var unequal = require("../unequal")

exports["test with both arguments"] = function(assert) {
  assert.ok(unequal(1, 2), "1 is not equal 2")
  assert.ok(!unequal(1, "1"), "1 is equal of '1'")
  assert.ok(!unequal(1, 1), "1 is equal 1")
  assert.ok(!unequal(1, true), "1 is equal of true")
}

exports["test currying"] = function(assert) {
  var actual = [ 1, "1", "2", 0 ].filter(unequal(true))

  assert.deepEqual(actual, [ "2", 0 ], "picked unequal arguments")
}

if (require.main === module)
  require("test").run(exports)

