const webpack = require('webpack')
const path = require('path')

const sourcePath = path.resolve(__dirname, '../src')

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [
      sourcePath,
      path.resolve(__dirname, '..', 'node_modules'),
    ],
  },
  devtool: 'source-map',
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false,
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'awesome-typescript-loader',
          }
        ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin()
  ],
}
