var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin({
          host: 'localhost',
          port: 4200//,
          //server: { baseDir: ['dist'] }
        })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
