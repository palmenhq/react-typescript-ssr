const webpack = require('webpack')
const path = require('path')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const config = require('./webpack.config.base')
const sourcePath = path.resolve(__dirname, '../src')

config.mode = 'production'
config.entry = {
    app: [
    'babel-polyfill',
    'es6-promise',
    path.resolve(sourcePath, 'client/entry.tsx'),
  ],
}

config.output = {
  filename: '[name]-[hash].js',
  publicPath: '/static/',
  path: path.resolve(__dirname, '../build/static')
}

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new StatsWriterPlugin({filename: 'stats.json'})
)

module.exports = config
