const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../../../example/sdk/'),
    filename: 'heatmap.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
}