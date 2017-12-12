var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: false,
    entry: {
        'main': ['whatwg-fetch', path.resolve(__dirname, 'src/app/index.js')]
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets'},
            {from: 'src/assets/icons'}
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
            {test: /.(png|jpg)$/, loader: 'file-loader'},
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=./public/build/[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
