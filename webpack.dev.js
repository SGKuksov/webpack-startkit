/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'scr/assets'),
      path.join(__dirname, 'scr/assets'),
    ],
    port: 3000,
    // useLocalIp: true,
    overlay: {
      warnings: false,
      errors: true
    },
    hot: true,
    noInfo: true,
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
