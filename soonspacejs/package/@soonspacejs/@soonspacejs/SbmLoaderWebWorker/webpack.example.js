const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../../../example/sdk/'),
    filename: 'SbmLoaderWebWorker.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
}