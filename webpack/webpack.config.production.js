const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const config = require('./webpack.config.base')

config.output.filename = '[name]-[hash].js'

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new ExtractTextPlugin('style-[hash].css'),
  new StatsWriterPlugin({ filename: 'stats.json' })
)

config.module.rules.push(
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules=true&camelCase=true&localIdentName=[name]-[hash:base64:5]!postcss-loader!sass-loader',
    })
  }
)

module.exports = config
