const webpack = require('webpack')
const path = require('path')
const env = require('./env')

const webpackBaseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const config = merge(webpackBaseConfig, {
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        host: 'localhost',
        port: 8085,
        hot: true,
        compress: true,
        noInfo: true,
        // 浏览器显示错误、警告
        overlay: {
            warning: true,
            errors: true
        },
        // 去除掉每次修改时，控制台的日志
        clientLogLevel: 'none'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 注入到webpack，添加环境变量
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        }),
        // plugin的解析顺序：从前往后
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/page/index.html',
            inject: true
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['启动成功']
            }
        })
    ]
})
module.exports = config
