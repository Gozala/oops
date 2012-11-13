"use strict";

var isnt = require("../isnt")

exports["test with both arguments"] = function(assert) {
  assert.ok(isnt(1, 2), "1 isnt 2")
  assert.ok(isnt(1, "1"), "1 isnt '1'")
  assert.ok(!isnt(1, 1), "1 is 1")
}

exports["test currying"] = function(assert) {
  var actual = [ 1, 2, 3, 4, 5 ].filter(isnt(3))

  assert.deepEqual(actual, [ 1, 2, 4, 5 ], "isnt curries arguments")
}

if (require.main === module)
  require("test").run(exports)
