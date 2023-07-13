const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const ENV = process.env.ENV || 'development'

module.exports = {
  mode: ENV,
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../app/public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}