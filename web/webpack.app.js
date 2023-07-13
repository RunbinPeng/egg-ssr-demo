const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const ENV = process.env.ENV || 'development'

module.exports = {
  mode: ENV,
  entry: {
    app: './app.js'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../app/dist'),
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