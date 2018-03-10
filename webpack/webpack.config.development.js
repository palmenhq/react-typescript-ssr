const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.config.base')

const port = process.env.CLIENT_DEV_PORT || 8081;

config.devServer = {
  compress: true,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  port,
  stats: config.stats,
}

config.output.filename = '[name].js'
config.output.publicPath = `http://localhost:${port}/`,
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

config.module.rules.push(
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]__[local]--[hash:base64:5]',
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ]
  },
)

module.exports = config
