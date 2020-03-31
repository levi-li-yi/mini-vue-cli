const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config')
const env = require('./env');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    optimization: {
        // 分割代码，并生成公共包
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxSize: 0,
            name: true,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        },
        minimizer: [
            new TerserWebpackPlugin({
                sourceMap: env === 'development',
                terserOptions: {
                    cache: true,
                    compress: {
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            })
        ]
    },
    stats: {
      modules: true,
      source: false
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/page/index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new ProgressBarWebpackPlugin({
            callback: function (res) {
                console.log('打包完成')
            }
        })
    ]
});