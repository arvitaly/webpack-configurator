// tslint:disable no-implicit-dependencies
import webpack = require("webpack");
const config: webpack.Configuration = {
    entry: __dirname + "/lib/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    devServer: {
        contentBase: __dirname,
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: ["html-loader"],
        }],
    },
};
export = config;
