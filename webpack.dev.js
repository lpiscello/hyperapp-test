const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});