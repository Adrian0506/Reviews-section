var path = require('path');

var SRC_DIR = path.join(__dirname, '/client');

module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};