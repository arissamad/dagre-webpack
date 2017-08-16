/* global window */

var graphlib;

if (typeof require === "function") {
  try {
    graphlib = require("graphlib-webpack");
  } catch (e) {}
}

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = {
  graphlib: graphlib
}
