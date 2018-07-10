const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.config.base')

const port = process.env.CLIENT_DEV_PORT || 8081;
const sourcePath = path.resolve(__dirname, '../src')


config.entry = {
  app: [
    'babel-polyfill',
    'es6-promise',
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
  publicPath: `http://localhost:${port}/`,
}

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = config
