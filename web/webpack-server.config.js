const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    'entry-server': path.resolve(__dirname, './entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  // externals: nodeExternals({
  //   // 不要外置化 webpack 需要处理的依赖模块。
  //   // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
  //   // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
  //   allowlist: /\.css$/
  // }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})