const path = require('path');
const env = require('./env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    /*模式*/
    mode: 'development',
    /*入口*/
    entry: {
        main: './src/index.js'
    },
    /*出口*/
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    /*loader解析顺序从后往前*/
    module: {
        /*加载顺序: mini/style,css,postcss,sass/stylus* */
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        fallback: 'responsive-loader',
                        limit: 4096,
                        quality: 50,
                        name: '[name][hash:8].[ext]',
                        outputPath: 'assets'
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
                //use: ['babel-loader','eslint-loader']
            },
            /*{
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }*/
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'src/assets'),
            // 将默认的运行时模式修改为编译模式
            'vue$': 'vue/dist/vue.esm.js'
        },
        // false可以不带扩展
        enforceExtension: false,
        // 自动解析确定的扩展
        extensions: ['.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash:8].css'
        })
    ]
}