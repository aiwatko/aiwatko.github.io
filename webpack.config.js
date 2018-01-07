var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});
// We need to export our webpack configuration
module.exports = {
    // Where webpack starts analyzing the project
    entry: ['./src/css/main.scss', './src/js/app.js'],

    // Where and which files are created
    output: {
        // path: path.resolve(__dirname, 'www.oktawiakata.com'),
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  // Webpack executes loaders in the reverse order 
                  use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
              },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    // Plugins are applied on the bundled files before they are output
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // new CleanWebpackPlugin(['www.oktawiakata.com'])
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        // })
    ]
};