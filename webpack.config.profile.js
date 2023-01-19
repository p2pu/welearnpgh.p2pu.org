const config = require('./webpack.config');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins = config.plugins.concat([new BundleAnalyzerPlugin({analyzerHost: "0.0.0.0"})]);

module.exports = config;
