/* eslint-disable */
const webpack = require('webpack');
const config = require('./config/config');

module.exports = {
  entry: config.entry,
  module: {
    rules: [
      config.rules.js,
      config.rules.pug,
      config.rules.twig,
      config.rules.style,
      config.rules.img,
      config.rules.font
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin()
  ],
  output: config.output,
  optimization: config.optimization
};
