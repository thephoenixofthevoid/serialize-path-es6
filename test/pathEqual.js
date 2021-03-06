var tape = require("tape");

var reNumber = /[-+]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[eE][-]?\d+)?/g;

tape.Test.prototype.pathEqual = function(actual, expected) {
  actual   = normalizePath(actual + "");
  expected = normalizePath(expected + "");
  
  const message  = "should be equal";
  const operator = "pathEqual";

  this._assert(actual === expected, {
    message, operator, actual, expected
  });
};

function normalizePath(path) {
  return path.replace(reNumber, formatNumber);
}

function formatNumber(s) {
  return Math.abs((s = +s) - Math.round(s)) < 1e-6 ? Math.round(s) : s.toFixed(6);
}
