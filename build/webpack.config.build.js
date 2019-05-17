const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackDllConfig = require('./dll.config');
const webpackBaseConfig = require('./webpack.config.base.js');
const rimraf = require('rimraf');
rimraf.sync(path.resolve(__dirname,'../dist'));
module.exports = ()=>{
  const promise = new Promise((resolve, reject) => {
    webpack(webpackDllConfig, (err, stats) => {
      if (err || stats.hasErrors()) {
        // Handle errors here
        reject(err);
        return;
      }
      resolve();
      console.log('dll compile done!');
    });
  });
  return promise.then(()=>{
    return merge(webpackBaseConfig,{
      output: {
        library: 'draggableTree',
        libraryTarget: 'umd',
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
      plugins:[
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('../dist/dll/lib-manifest.json'),
        }),
      ]
    });
  })
}
