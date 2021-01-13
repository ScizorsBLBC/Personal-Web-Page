const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
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
                test: /\.(ts|js)x?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.hbs"
        })
    ],
    output: {
        path: path.join(__dirname, "docs")
    }
};


