const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    // Where webpack starts analyzing the project
    entry: ['./src/css/main.scss', './src/js/app.js', './src/img/icon.png'],

    // Where and which files are created
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        new CleanWebpackPlugin(['dist']),
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        // })
        new CopyWebpackPlugin([
        { 
            from: path.resolve(__dirname, './src/resources/manifest.json'), 
            to: './'
        },
        ]),
    ]
};