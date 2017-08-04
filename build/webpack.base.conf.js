/**
 * @Author: chenanjie
 * @Date:   2017-06-13T21:20:08+08:00
 * @Last modified by:   chenanjie
 * @Last modified time: 2017-07-05T13:30:27+08:00
 */



var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var lang = require('highlight.js-async-webpack/src/file.lang.hljs.js');

var _entry= {
    app: './src/main.js',
    vue: ['vue']
};

// for (var i = 0; i < lang.length; i++) {
//     _entry[lang[i]] = ['mavon-editor/dist/js/' + lang[i] + '.js']
// }

module.exports = {
  entry:_entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(jpg|png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
