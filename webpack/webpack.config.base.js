const webpack = require('webpack')
const path = require('path')

const sourcePath = path.resolve(__dirname, '..', 'client')

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      'es6-promise',
      path.resolve(sourcePath, 'index.tsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build', 'public'),
  },
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
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(sourcePath, 'tsconfig.json'),
            }
          }
        ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.svg$/, use: 'svg-inline-loader' },
      {
        test: /\.(png|gif|jpg)$/,
        include: sourcePath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20480,
              name: 'assets/[name]-[hash].[ext]',
            },
          },
        ],
      },
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
