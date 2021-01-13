const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    ]
};


