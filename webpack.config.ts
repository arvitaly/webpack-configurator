// tslint:disable-next-line:no-implicit-dependencies
import webpack = require("webpack");
const config: webpack.Configuration = {
    entry: __dirname + "/index.js",
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
