/* eslint-disable */
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/assets/js/script.js',
    app: './src/assets/js/app.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  rules: {
    js: {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src/assets/js'),
      loader: 'babel-loader'
    },
    pug: {
      test: /\.pug$/,
      use: ['pug-loader']
    },
    twig: {
      test: /\.twig$/,
      loader: 'twig-loader',
      options: {
        // See options section below
      }
    },
    style: {
      test: /\.(sa|sc|c)ss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    img: {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    font: {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
