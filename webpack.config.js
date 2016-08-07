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
  }
}
