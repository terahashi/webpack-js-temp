const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const webpackMerge = require('webpack-merge');
// const commonConf = require('./webpack.common');

const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name].[contenthash]';
const assetFile = '[name].[contenthash]';

const htmlMinifyOption = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

module.exports = () =>
  merge(commonConf({ outputFile, assetFile, htmlMinifyOption }), {
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
  });
