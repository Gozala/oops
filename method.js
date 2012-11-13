"use strict";

var slicer = Array.prototype.slice

module.exports = method
function method(name) {
  /**
  Utility function takes method `name` and returns a function, which on
  invoke calls method of the first argument and returns value back.
  **/
  var curried = slicer.slice(arguments, 1)
  return function invoke(self) {
    var method = self && self[name]
    var params = method && slicer.slice(arguments, 1)
    if (method && curried.length) params.unshift.apply(params, curried)
    return method && method.apply(self, params)
  }
}
exports.method = method
