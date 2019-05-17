const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
rimraf.sync('dist/dll');
module.exports = {
  entry: {
    lib: ['vue'],
  },
  output: {
    path: path.resolve(__dirname, '../dist', 'dll'),
    filename: '[name].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.resolve(__dirname, '../dist/dll', '[name]-manifest.json'),
      context: __dirname
    }),
  ]
  
};
