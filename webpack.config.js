const webpack = require('webpack')

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"production"'
})

module.exports = {
  entry: './client.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  plugins: [definePlugin]
}
