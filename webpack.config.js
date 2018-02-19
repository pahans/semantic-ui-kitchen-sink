var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var extractLessBundle = new ExtractTextPlugin({ filename: './bundle.css', allChunks: true });

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader'],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: extractLessBundle.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            hmr: true,
                            sourceMap: true,
                        },
                    }, {
                        loader: 'less-loader',
                        options: {
                            hmr: true,
                            sourceMap: true,
                        },
                    }],
                }),
            },
        ],
    },
    plugins: [
        extractLessBundle,
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: 'public/',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '../../theme.config$': path.join(__dirname, 'src/ballerina-theme/theme.config')
        },
    },
};

module.exports = config;
