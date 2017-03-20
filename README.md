# dagre - Graph layout for JavaScript

[![Build Status](https://secure.travis-ci.org/cpettitt/dagre.png?branch=master)](http://travis-ci.org/cpettitt/dagre)

Dagre is a JavaScript library that makes it easy to lay out directed graphs on
the client-side.

For more details, including examples and configuration options, please see our
[wiki](https://github.com/cpettitt/dagre/wiki).

**This project is not being actively developed or maintained.**

## License

dagre is licensed under the terms of the MIT License. See the LICENSE file
for details.

## Webpack Usage

1. (Optional) In your webpack.config, expose `dagre-webpack` as `dagre`. This is a nicety that allows you to avoid calling `require('dagre-webpack')` on each page that needs it.

```js
new webpack.ProvidePlugin({
  ...
  dagre: 'dagre-webpack'
  ...
});
```
    
2. Instantiate your graph (assuming you completed step 1)

```js
var g = new dagre.graphlib.Graph();

// Call g.SetEdge and g.SetNode and create your graph

dagre.layout(g);
```     
