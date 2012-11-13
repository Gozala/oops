"use strict";

var curry = require("functional/curry")

var field = curry(function(id, hash) {
  /**
  High order function that returns accessor function for the attribute
  with a given name. Resulting function will take an object and will return
  value associated with that field.
  **/
  return hash[id]
})

module.exports = field
