/* global window */

var graphlib;

if (typeof require === "function") {
  try {
    graphlib = require("graphlib-webpack");
  } catch (e) {}
}

module.exports = graphlib
