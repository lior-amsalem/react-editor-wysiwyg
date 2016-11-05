var path = require('path');
    webpack = require('webpack'),
    localhost = 'http://localhost:3344',
    hotMiddlewareEntry = 'webpack-hot-middleware/client?path=' + localhost + '/__webpack_hmr',
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            './examples/basic',
            hotMiddlewareEntry,
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: localhost + '/',
        port: 3344
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: [
                path.join(__dirname, 'examples'),
                path.join(__dirname, 'src')
            ]
        }, {
            test: /(\.css$)|(\.scss$)/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                ['raw-loader', 'sass-loader']
            )
        }, 
{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('dev.css')
    ]
};
