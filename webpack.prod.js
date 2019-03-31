/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const common = require('./webpack.common.js');
const html = require('./config/html');
// const favicon = require('./config/favicon');
// const vendors = require('./config/vendors');
// const copyVendors = require('./config/copyVendors');

const HWPConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, 'src/pages/index.pug')
});

const articles = ['sass-react'];
// , 'chart-js', 'copy-right', 'object-literal', 'spread-operator'

const multiplesFiles = articles.map(entryName => {
  return new HtmlWebpackPlugin({
    filename: `${entryName}.html`,
    template: path.resolve(__dirname, `src/pages/${entryName}.pug`)
  });
});

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),

    // https://github.com/jantimon/html-webpack-plugin
    // new HtmlWebpackPlugin(html),
    HWPConfig,
    new HtmlWebpackPlugin({
      filename: 'page.html',
      template: 'src/pages/page.pug'
    }),

    // https://github.com/webpack-contrib/copy-webpack-plugin
    // new CopyWebpackPlugin(copyVendors.vendorsList),

    // https://github.com/jharris4/html-webpack-include-assets-plugin
    // new HtmlWebpackIncludeAssetsPlugin(vendors),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),

    // https://github.com/numical/style-ext-html-webpack-plugin
    // new StyleExtHtmlWebpackPlugin(),

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
    })
  ].concat(multiplesFiles)
});
