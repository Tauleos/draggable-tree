const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'draggable-tree.js',
    library: 'draggable',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    },{
      test:/\.js$/,
      loader: 'babel-loader',
      options:{
        presets: ['@babel/preset-env'],
        plugins: []
      },
      exclude: /node-modules/,
    },
      {
      test: /\.css$/,
      use: ['vue-style-loader','css-loader']
    }
    ],
  },
  plugins: [new VueLoaderPlugin()],
  
};
