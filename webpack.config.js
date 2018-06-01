"use strict";
// tslint:disable no-var-requires no-implicit-dependencies
const WebpackMonitor = require("webpack-monitor");
const config = {
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
    plugins: [
        new WebpackMonitor({
            capture: true,
            launch: true,
            port: 3030,
            excludeSourceMaps: true,
        }),
    ],
};
module.exports = config;
