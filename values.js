"use strict";

module.exports = values

function values(target) {
  return target ? Object.keys(target).map(value, target) : []
}
var value = function value(key) { return this[key] }

