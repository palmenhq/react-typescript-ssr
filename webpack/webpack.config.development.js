const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.config.base')

config.devServer = {
  contentBase: path.resolve(path.join(__dirname, '..', 'dev-server-content-base')),
  historyApiFallback: true,
  compress: true,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  port: process.env.PORT,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  stats: config.stats,
}

config.output.filename = '[name].js'
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
