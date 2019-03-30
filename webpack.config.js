const path = require('path');
const favicon = require('./config/favicon');
const html = require('./config/html');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
// const ExtractTextWebpackPlugin = require('');// deprecated
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

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
      // loaders: [
      //   { test: /\.css$/, loader: ExtractTextPlugin.extract(...)}
      // ]
    ]
  },
  plugins: [
    // https://github.com/webpack-contrib/copy-webpack-plugin
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css', to: 'css/'},
      // { from: 'node_modules/bootstrap/dist/fonts', to: 'fonts/'}
    ]),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin(html),

    // https://github.com/jharris4/html-webpack-include-assets-plugin
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['css/bootstrap.min.css', 'css/bootstrap-theme.min.css'],
      append: false
    }),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    // https://github.com/numical/style-ext-html-webpack-plugin
    new StyleExtHtmlWebpackPlugin(),

    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['css/style.css'],
      append: true
    }),

    // https://github.com/thegc/html-webpack-inline-svg-plugin
    new HtmlWebpackInlineSVGPlugin(),
    
    // https://github.com/jantimon/favicons-webpack-plugin
    // new FaviconsWebpackPlugin(favicon),
    
    // https://github.com/numical/script-ext-html-webpack-plugin
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
  ]
};
