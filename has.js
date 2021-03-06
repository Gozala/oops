"use strict";

var curry = require("functional/curry")

var has = curry(function has(name, dictionary) {
  /**
  High order function that returns predicate function which will return
  `true` if given `hash` has a field with that `name` and `false` if doesn't.
  **/
  return dictionary && name in dictionary
})

module.exports = has
