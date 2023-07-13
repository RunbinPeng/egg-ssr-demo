const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: {
    'entry-client': path.resolve(__dirname, './entry-client.js')
  },
  plugins: [
    new VueSSRClientPlugin()
  ]
})