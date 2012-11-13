"use strict";

module.exports = pairs

function pairs(target) {
  return target ? Object.keys(target).map(pair, target) : []
}
var pair = function pair(key) { return [key, this[key]] }
