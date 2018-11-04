const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.config.base')

const port = process.env.WEBPACK_PORT || 8081;
const sourcePath = path.resolve(__dirname, '../src')

config.mode = 'development'
config.entry = {
  app: [
    '@babel/polyfill',
    path.resolve(sourcePath, 'client/entry.tsx'),
  ],
}

config.devServer = {
  compress: true,
  hot: true,
  inline: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  port,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  stats: config.stats,
}

config.output = {
  filename: '[name].js',
  publicPath: process.env.WEBPACK_HOST || `http://localhost:${port}/`,
}

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = config
