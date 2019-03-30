const path = require('path');
const favicon = require('./config/favicon');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: [
    './src/js/script.js',
  ],
  output: {
    filename: './js/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  devServer: {
    overlay: true
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js'),
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'test.html',
      template: 'src/test.html'
    }),
    // https://github.com/numical/script-ext-html-webpack-plugin
    new ScriptExtHtmlWebpackPlugin(),
    // https://github.com/jantimon/favicons-webpack-plugin
    // new FaviconsWebpackPlugin()
    // new FaviconsWebpackPlugin(favicon)
  ]
};
