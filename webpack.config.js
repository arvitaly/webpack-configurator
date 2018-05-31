"use strict";
const config = {
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
module.exports = config;
