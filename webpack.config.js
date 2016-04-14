var vue = require('vue-loader');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  }
}