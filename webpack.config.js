const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    devServer: {
        historyApiFallback: true
    },
    mode: "development",
    entry: {
        vendor: [
            "react",
            "react-dom",
        ],
        app: [
            "@babel/polyfill",
            "./src/App",
        ]
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {loader: "babel-loader"},
                    {loader: "react-svg-loader", options: {jsx: false}}
                ]
            },
            {
                test: /\.(ts|js)x?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.hbs"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.hbs",
            filename: "404.html"
        })
    ],
    output: {
        path: path.join(__dirname, "docs")
    }
};


