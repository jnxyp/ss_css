const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {"ss_css": "./src/ss_css.js"},
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })],
    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "assets/images/[hash].[ext]"
                        }
                    }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "assets/fonts/[hash].[ext]"
                        }
                    }]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
        clean: true
    },
    devServer: {
        contentBase: './docs',
    },
    devtool: "source-map"
};
