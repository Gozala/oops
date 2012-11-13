"use strict";

var equal = require("../equal")

exports["test with both arguments"] = function(assert) {
  assert.ok(!equal(1, 2), "1 is not equal 2")
  assert.ok(equal(1, "1"), "1 is equal of '1'")
  assert.ok(equal(1, 1), "1 is equal 1")
  assert.ok(equal(1, true), "1 is equal of true")
}

exports["test currying"] = function(assert) {
  var actual = [ null, undefined, 0, 1 ].filter(equal(null))

  assert.deepEqual(actual, [ null, undefined ], "picked equal arguments")
}

if (require.main === module)
  require("test").run(exports)
