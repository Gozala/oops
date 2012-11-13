"use strict";

exports["test insnt"]= require("./isnt")
exports["test is"]= require("./is")
exports["test equal"]= require("./equal")
exports["test unequal"]= require("./unequal")
exports["test greater"]= require("./greater")
exports["test less"]= require("./less")
exports["test and"] = require("./and")
exports["test or"] = require("./or")




require("test").run(exports)
