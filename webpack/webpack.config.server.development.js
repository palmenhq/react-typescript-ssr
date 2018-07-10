const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = require('./webpack.config.base')
const sourcePath = path.resolve(__dirname, '../src')

config.entry = {
  server: [
    'babel-polyfill',
    path.resolve(sourcePath, 'index.ts'),
  ]
}

config.output = {
  filename: 'index.js',
  publicPath: '/static/',
  path: path.resolve(__dirname, '../build')
}
config.target = 'node'
config.node = {
  __dirname: true,
}
config.externals = nodeExternals()

module.exports = config
