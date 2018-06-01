// tslint:disable no-var-requires no-implicit-dependencies
const WebpackMonitor = require("webpack-monitor");
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
    plugins: [
        new WebpackMonitor({
            capture: true, // -> default 'true'
            launch: true, // -> default 'false'
            port: 3030, // default -> 8081
            excludeSourceMaps: true, // default 'true'
        }),
    ],
};
export = config;
