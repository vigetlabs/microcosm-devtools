var alias = require('../alias')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: {
    devtools: './src/devtools.js',
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.(png|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 0 }
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
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    quiet: true
  },
  plugins: [new FriendlyErrorsPlugin()]
}
