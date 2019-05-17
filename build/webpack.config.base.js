const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['transform-vue-jsx'],
        },
        exclude: /node-modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader', // 将 Sass 编译成 CSS
        ],
  
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    
  ],
  resolve: {
    extensions: ['.js', '.vue'],
  }
};
