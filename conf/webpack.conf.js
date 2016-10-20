const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'eslint'
    //  }
    //],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
      {
        test: /.vue$/,
        loaders: [
          'vue'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=img/[hash].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    // 提公用js到common.js文件中
    //new webpack.optimize.CommonsChunkPlugin('common.js'),
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'build.js',
    chunkFilename: '[id].build.js?[chunkhash]'
  },
  entry: `./${conf.path.src('index')}`
};



