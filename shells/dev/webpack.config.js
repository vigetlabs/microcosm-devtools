var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var alias = require('../alias')
var webpack = require('webpack')

module.exports = {
  entry: {
    devtools: [
      'react-hot-loader/patch',
      'react-dev-utils/webpackHotDevClient',
      './src/devtools.js'
    ],
    backend: './src/backend.js',
    hook: './src/hook.js',
    target: './target/index.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js'
  },
  resolve: {
    alias: alias
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: [/src/, /shell/],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.babel-cache',
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]-[name]-[local]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 0 }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: '#cheap-eval-source-map',
  devServer: {
    hot: true,
    quiet: true
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
