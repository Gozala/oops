"use strict";

var is = require("../is")

exports["test with both arguments"] = function(assert) {
  assert.ok(!is(1, 2), "1 is not 2")
  assert.ok(!is(1, "1"), "1 is not '1'")
  assert.ok(is(1, 1), "1 is 1")
}

exports["test currying"] = function(assert) {
  var actual = [ 1, 0, 1, 0, 1 ].map(is(1))

  assert.deepEqual(actual, [ true, false, true, false, true ],
                   "is curries arguments")
}

if (require.main === module)
  require("test").run(exports)
