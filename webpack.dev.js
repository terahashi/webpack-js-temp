const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');

const outputFile = '[name]';
const assetFile = '[name]';
const htmlMinifyOption = false;

module.exports = () =>
  merge(commonConf({ outputFile, assetFile, htmlMinifyOption }), {
    mode: 'development',
    devtool: 'source-map',
    //⬇︎講師の設定
    // devServer: {
    //   open: true,
    //   contentBase: './public',
    //   watchOptions: {
    //     ignored: /node_modules/,
    //   },
    // },
    devServer: {
      static: './public',
      watchFiles: {
        paths: ['src/'],
        options: {
          ignored: /node_modules/,
        },
      },
      port: 8080,
      open: true,
    },
  });
